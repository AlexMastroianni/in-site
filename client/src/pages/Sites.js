import React from 'react';
import AllSites from '../components/Sites/allSites';
import SideBar from '../components/SideBar';

function Site({ token }) {
  return (
    <>
      <SideBar />
      <div className="siteContainer">
        <AllSites token={token} />
      </div>
    </>
  );
}

export default Site;
