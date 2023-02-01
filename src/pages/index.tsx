import { useState } from 'react'
import Layout from '@/layout/Layout'
import Tabs from '@/components/Tabs'
import VideoSction from '@/components/Home/VideoSction'
import Anime from '@/components/Home/Anime'
import MainScroll from '@/components/Home/MainScroll'
export default function Home() {
 
  return (
    <Layout>
      {/* <VideoSction/> */}
      {/* <div>
      <Tabs />
      </div> */}
      <MainScroll/>
      {/* <Anime/> */}
  
    </Layout>
  
  )
}