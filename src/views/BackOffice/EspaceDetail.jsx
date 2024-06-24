import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EspaceDetail = () => {
  const { espaceId } = useParams(); 

  const [espaceDetails, setEspaceDetails] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const fetchEspaceDetails = async () => {
      try {

        const response = await fetch(`http://127.0.0.1:8000/api/espaces/${espaceId}`); 
        const data = await response.json();
        setEspaceDetails(data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching espace details:', error);
        setLoading(false);
      }
    };

    fetchEspaceDetails();
  }, [espaceId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-zinc-950 dark:border-zinc-50"></div>
      </div>
    );
  }



  if (espaceDetails) {
    return <div>Espace detail</div>; 
  }


};

export default EspaceDetail;
