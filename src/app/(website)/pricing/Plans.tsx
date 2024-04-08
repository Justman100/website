'use client';
import { Button } from 'react-basics';
import Checkmark from 'assets/checkmark.svg';
import Link from 'next/link';
import styles from './Plans.module.css';
import { CLOUD_URL } from 'lib/constants';
import useQueryString from 'components/hooks/useQueryString';

export default function Plans() {
  const query = useQueryString({ ref: 'umami-pricing' });

  const plans = [
    {
      name: 'Hobby',
      price: (
        <>
          <strong>$0</strong> / month
        </>
      ),
      description: 'Up to 10K monthly events',
      features: ['Up to 3 websites', '1 year data retention', 'Community support'],
      url: `${CLOUD_URL}/signup${query}&plan=hobby`,
      button: 'Get started',
    },
    {
      name: 'Pro',
      price: (
        <>
          From <strong>$9</strong> / month
        </>
      ),
      description: 'Simple usage based pricing',
      features: [
        'Unlimited websites',
        'Unlimited team members',
        '5 year data retention',
        'Email support',
      ],
      url: `${CLOUD_URL}/signup${query}&plan=pro`,
      button: 'Try 14-day free trial',
    },
    {
      name: 'Enterprise',
      price: <strong>Custom</strong>,
      description: 'Tailored for your business',
      features: [
        'Unlimited websites',
        'Unlimited team members',
        'Custom data retention',
        'Onboarding support',
        'Designated support engineer',
      ],
      url: 'mailto:sales@umami.is?subject=Umami Cloud enterprise pricing',
      button: 'Contact us',
    },
  ];

  return (
    <div className={styles.plans}>
      {plans.map(({ name, price, description, features, url, button }) => {
        return (
          <div key={name} className={styles.plan}>
            <div>
              <div className={styles.title}>{name}</div>
              <div className={styles.price}>{price}</div>
              <div className={styles.description}>{description}</div>
              <ul>
                {features.map((feat, index) => {
                  return (
                    <li key={index}>
                      <Checkmark /> {feat}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.button}>
              <Link href={url}>
                <Button variant="secondary">{button}</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
