import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, title, slug, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick(id);
    }
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleClick}>{title}</span>
    </div>
  );
};

export default TopicListItem;
