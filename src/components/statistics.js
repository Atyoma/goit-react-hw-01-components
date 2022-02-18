import PropTypes from 'prop-types';
import StatisticCard from './statisticCard';
// import App from 'App';
// import StatisticCard from './statisticCard';
export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <StatisticCard label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
