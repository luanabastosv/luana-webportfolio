import data from "../data/website-content.json";
function TopBar() {
  const topbar = data.topbar;
  
  return (
    <div className="top-bar">
        <p dangerouslySetInnerHTML={{ __html: topbar.content }} />
    </div>
  );
}

export default TopBar;