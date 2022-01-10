import React, {useState, useEffect} from 'react';
import {safeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const {loading, data, error} = useFetch(Config.API_URL);

  // console.log('render');
  // console.log({loading, data: data.length, error});
  // console.log('--------------');

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <safeAreaView>
      <Flatlist data={data} renderItem={renderProduct} />
    </safeAreaView>
  );
};

export default Products;
