import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";

// const sampleDataForTopicList = [
//   {
//     id: 1,
//     slug: "topic-1",
//     title: "Nature",
//   },
//   {
//     id: 2,
//     slug: "topic-2",
//     title: "Travel",
//   },
//   {
//     id: 3,
//     slug: "topic-3",
//     title: "People",
//   },
// ];

const TopicList = ({ onSelectTopic }) => {
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
