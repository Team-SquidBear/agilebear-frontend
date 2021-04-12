import { useEffect, useState } from 'react';
import styles from './LinkList.module.css';

interface Link {
  url: string,
  name: string,
  description: string,
}

function LinkList(): any {
  const [links, setLinks] = useState([]);
  const loadLinks = async () => {
    try {
      const res = await fetch('/api/getLinks');
      const links = await res.json();
      setLinks(links.data.allLinks.data);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadLinks();
  }, [])

  return (
    <div className={styles.LinkList} data-testid="LinkList">
      <h2>Links</h2>
      {links.length && links.map((link: Link) => {
        return <p>{link.description} - <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a></p>
      })}
    </div>
  )
};

export default LinkList;
