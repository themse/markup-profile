import { FC } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/works',
    title: 'Works',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
];

export const Nav: FC = () => {
  return (
    <nav>
      <ul className="flex gap-x-5">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link to={item.href}>
              <span className="font-text-100 text-xl hover:text-primary">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
