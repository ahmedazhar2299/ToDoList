import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect, useState } from 'react'
import Input from "../../components/Input/Input";
import axios from "axios";





export default function Home() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const list = await axios.get('/list/')
      setLists(list.data)
    }
    getList()
  }, [lists])

  return (
    <>
      <Navbar />
      <Input />
      {lists.map((list) => <List listText={list.text} listDate = {list.date} listIsCompleted ={list.isCompleted} />)}
      <Footer length={lists.length} />
    </>
  )
}
