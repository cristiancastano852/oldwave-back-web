import React from 'react';
import { useLocation } from 'react-router-dom';
import ItemList from 'components/organism/ItemList';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Search() {
  const query = useQuery();
  const userQuery = query.get('query');

  return <ItemList query={userQuery} />;
}
