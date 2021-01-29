import cx from 'classnames';
import React from 'react';

import networkPin from './assets/networkPin.svg';
import styles from './styles.module.scss';

type BylineClassNamesProps = {
  bylineContainer?: string;
  author?: string;
  jobContainer?: string;
  location?: string;
};

export type BylineProps = {
  firstName: string;
  occupation: string;
  location?: string;
  company?: string;
  lastName?: string;
  /**
   * an object to overwrite any combo of, or all, of the default styles. Structured as:
   * `{bylineContainer: styles.className, author: styles.className,
   * jobContainer:styles.className, location: styles.className}`
   */
  classNames?: BylineClassNamesProps;
};

export const Byline: React.FC<BylineProps> = ({
  firstName,
  occupation,
  location,
  company,
  lastName,
  classNames = {},
}) => (
  <div className={cx(styles.bylineContainer, classNames.bylineContainer)}>
    <span
      data-testid="author-container"
      className={cx(styles.author, classNames.author)}
    >
      <span>{firstName}</span>
      {lastName && <span className={styles.lastName}>{` ${lastName}`}</span>}
    </span>
    <div data-testid="job-container" className={classNames.jobContainer}>
      <span>{occupation}</span>
      {company && <span className={styles.company}>{` @ ${company}`}</span>}
    </div>
    {location && (
      <div className={styles.locationContainer}>
        <img
          alt="Location pin icon"
          className={styles.networkPin}
          src={networkPin}
        />
        <span className={classNames.location}>{location}</span>
      </div>
    )}
  </div>
);
