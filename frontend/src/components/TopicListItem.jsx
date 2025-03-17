import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: 1,
//   slug: "topic-1",
//   label: "Nature",
// };

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
