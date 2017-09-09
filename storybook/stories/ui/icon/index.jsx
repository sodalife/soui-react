import React from 'react'
import { storiesOf } from '@storybook/react'
import cx from 'classnames'

import { Icon } from '../../../../dist/soui'
import styles from './style.pcss'

storiesOf('Icon', module)
  .add('basic', () => (
    <div className={styles.view}>
      <p>
        <h3>Basic</h3>
        <Icon className={styles.icon} type="home" />
        <Icon className={styles.icon} type="user" />
        <Icon className={styles.icon} type="right" />
        <Icon className={styles.icon} type="close" />
        <Icon className={styles.icon} type="lock" />
        <Icon className={styles.icon} type="mobile" />
        <Icon className={styles.icon} type="scan" />
        <Icon className={styles.icon} type="guide" />
        <Icon className={styles.icon} type="setting" />
        <Icon className={styles.icon} type="wallet" />
        <Icon className={styles.icon} type="eye" />
      </p>
      <p>
        <h3>Circle-Outline</h3>
        <Icon className={styles.icon} type="close-circle-o" />
        <Icon className={styles.icon} type="check-circle-o" />
        <Icon className={styles.icon} type="exclamation-circle-o" />
      </p>
      <p>
        <h3>Circle</h3>
        <Icon className={styles.icon} type="close-circle" />
        <Icon className={styles.icon} type="check-circle" />
        <Icon className={styles.icon} type="scan-circle" />
      </p>
      <p>
        <h3>Shield-Outline</h3>
        <Icon className={styles.icon} type="check-shield-o" />
      </p>
      <p>
        <h3>Laundry Mode</h3>
        <Icon className={styles.icon} type="laundry-dry" />
        <Icon className={styles.icon} type="laundry-express" />
        <Icon className={styles.icon} type="laundry-standard" />
        <Icon className={styles.icon} type="laundry-heavy" />
      </p>
      <p>
        <h3>Tall</h3>
        <Icon className={styles.icon} type="lock-tall" />
        <Icon className={styles.icon} type="mobile-tall" />
      </p>
    </div>
  ))
  .add('custom color', () => (
    <div className={styles.view}>
      <p>
        <h3>Basic</h3>
        <Icon className={cx(styles.icon, styles.green)} type="home" />
        <Icon className={cx(styles.icon, styles.green)} type="user" />
        <Icon className={cx(styles.icon, styles.green)} type="right" />
        <Icon className={cx(styles.icon, styles.green)} type="close" />
        <Icon className={cx(styles.icon, styles.green)} type="lock" />
        <Icon className={cx(styles.icon, styles.green)} type="mobile" />
        <Icon className={cx(styles.icon, styles.green)} type="scan" />
        <Icon className={cx(styles.icon, styles.green)} type="guide" />
        <Icon className={cx(styles.icon, styles.green)} type="setting" />
        <Icon className={cx(styles.icon, styles.green)} type="wallet" />
        <Icon className={cx(styles.icon, styles.green)} type="eye" />
      </p>
      <p>
        <h3>Circle-Outline</h3>
        <Icon className={cx(styles.icon, styles.green)} type="close-circle-o" />
        <Icon className={cx(styles.icon, styles.green)} type="check-circle-o" />
        <Icon className={cx(styles.icon, styles.green)} type="exclamation-circle-o" />
      </p>
      <p>
        <h3>Circle</h3>
        <Icon className={cx(styles.icon, styles.green)} type="close-circle" />
        <Icon className={cx(styles.icon, styles.green)} type="check-circle" />
        <Icon className={cx(styles.icon, styles.green)} type="scan-circle" />
      </p>
      <p>
        <h3>Shield-Outline</h3>
        <Icon className={cx(styles.icon, styles.green)} type="check-shield-o" />
      </p>
      <p>
        <h3>Laundry Mode</h3>
        <Icon className={cx(styles.icon, styles.green)} type="laundry-dry" />
        <Icon className={cx(styles.icon, styles.green)} type="laundry-express" />
        <Icon className={cx(styles.icon, styles.green)} type="laundry-standard" />
        <Icon className={cx(styles.icon, styles.green)} type="laundry-heavy" />
      </p>
      <p>
        <h3>Tall</h3>
        <Icon className={cx(styles.icon, styles.green)} type="lock-tall" />
        <Icon className={cx(styles.icon, styles.green)} type="mobile-tall" />
      </p>
    </div>
  ))
  .add('highlight (multiple colors)', () => (
    <div className={styles.view}>
      <p>
        <h3>Basic</h3>
        <Icon className={styles.icon} type="home-highlight" />
        <Icon className={styles.icon} type="user-highlight" />
      </p>
    </div>
  ))
