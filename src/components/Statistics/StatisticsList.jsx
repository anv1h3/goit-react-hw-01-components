import PropTypes from 'prop-types';
import {
  SectionWrap,
  SectionTitle,
  StatisticItem,
  StatisticList,
  StatisticInfo,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionWrap>
      {title && <SectionTitle>{title}</SectionTitle>}

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id}>
            <StatisticInfo>{label}</StatisticInfo>
            <StatisticInfo>{percentage}%</StatisticInfo>
          </StatisticItem>
        ))}
      </StatisticList>
    </SectionWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
