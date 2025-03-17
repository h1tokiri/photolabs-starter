import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";

const TopicList = ({ topics, onSelectTopic }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          title={topic.title}
          slug={topic.slug}
          onClick={onSelectTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
