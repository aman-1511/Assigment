import React, { useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getCampaigns, deleteCampaign, updateCampaign } from '../../api';
import { Campaign, CampaignStatus } from '../../types';
import CampaignCard from '../../components/campaign/CampaignCard';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import ErrorAlert from '../../components/common/ErrorAlert';
import useApi from '../../hooks/useApi';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  
  const campaignsApi = useApi<Campaign[]>(() => getCampaigns());
  

  useEffect(() => {
    campaignsApi.execute();
    
  }, []);
  
  
  const handleDelete = useCallback(async (id: string) => {
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      try {
        await deleteCampaign(id);
        campaignsApi.execute(); 
      } catch (err) {
        console.error('Failed to delete campaign:', err);
      }
    }
  }, [campaignsApi]);

 
  const toggleStatus = useCallback(async (campaign: Campaign) => {
    try {
      const newStatus = campaign.status === CampaignStatus.ACTIVE 
        ? CampaignStatus.INACTIVE 
        : CampaignStatus.ACTIVE;
      
      await updateCampaign(campaign._id, { status: newStatus });
      campaignsApi.execute(); 
    } catch (err) {
      console.error('Failed to update campaign status:', err);
    }
  }, [campaignsApi]);


  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

    if (campaignsApi.error && campaignsApi.error.includes('ERR_INSUFFICIENT_RESOURCES')) {
      const retryDelay = Math.pow(2, retryCount) * 1000; 
      
      if (retryCount < maxRetries) {
        const timer = setTimeout(() => {
          console.log(`Retrying API call (attempt ${retryCount + 1})`);
          campaignsApi.execute();
          retryCount++;
        }, retryDelay);
        
        return () => clearTimeout(timer);
      }
    }
  }, [campaignsApi.error]);

  if (campaignsApi.loading) {
    return <LoadingIndicator message="Loading campaigns..." />;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Campaigns</h1>
        <Link to="/campaign/new" className="btn btn-success">
          Create New Campaign
        </Link>
      </div>

      <ErrorAlert message={campaignsApi.error} />

      {!campaignsApi.data || campaignsApi.data.length === 0 ? (
        <div className="no-campaigns">
          <p>No campaigns found. Create a new campaign to get started.</p>
        </div>
      ) : (
        <div className="campaign-list">
          {campaignsApi.data.map((campaign) => (
            <CampaignCard
              key={campaign._id}
              campaign={campaign}
              onToggleStatus={toggleStatus}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard; 