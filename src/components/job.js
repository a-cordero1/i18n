import { FormattedDate, FormattedNumber } from 'react-intl';
import React from "react";

const Job = (props) => {
  const language = navigator.language.split(/[-_]/)[0];
  const isSpanish = language === 'es';

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {props.offer.salary} {isSpanish ? (props.offer.salary > 1 ? 'millones' : 'millón') : 'million'}
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;