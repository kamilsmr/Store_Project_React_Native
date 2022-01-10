import React, {useState, useEffect} from 'react';
import {safeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const {loading, data, error} = useFetch(Config.API_URL);
  console.log('render');
  console.log({loading, data: data.length, error});
  console.log('--------------');

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <safeAreaView>
      <Flatlist data={data} renderItem={renderProduct} />
    </safeAreaView>
  );
};

export default Products;
