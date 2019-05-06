import React, { useState } from 'react';
import ManageLeftPanel from '../ManageEvents/ManageLeftPanel';
import TopBar from '../accessories/TopBar';
import ScoreView from './subcomponents/ScoreView';
import SelectView from './subcomponents/SelectView';


function JudgesTable() {
  const [view, setView] = useState({
    view: 'select',
  });
  return (
    <div className="tournaments__main-wrap tournaments__main-wrap--bg-gray">
      {/* Flexed Item 1 */}
      <ManageLeftPanel name="Judge's Table" />
      {/* Flexed Item 2 */}
      <div className="c-Tournament-white-bg tournaments__main-wrap--full-width">
        <TopBar title="Judge's Table" buttons={[]} />
        {view.view === 'score' && <ScoreView />}
        {view.view === 'select' && <SelectView />}
      </div>
    </div>
  );
}

export default JudgesTable;