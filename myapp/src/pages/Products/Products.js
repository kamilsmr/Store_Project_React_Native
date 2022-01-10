import React, {useState, useEffect} from 'react';
import {safeAreaView, Text, Flatlist} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(Config.API_URL);
    setData(productData);
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <safeAreaView>
      <Flatlist data={data} renderItem={renderProduct} />
    </safeAreaView>
  );
};

export default Products;
