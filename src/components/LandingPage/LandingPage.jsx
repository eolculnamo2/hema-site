import React from 'react';
import Row1 from './Rows/Row1';
import HomeHero from './Rows/HomeHero';
import ArticleLeft from './Rows/ArticleLeft';
import ArticleRight from './Rows/ArticleRight';
import homePageArticles from '../../../content/homePageFeatured';

const LandingPage = () => (
  <>
    <Row1 />
    <HomeHero />
    <ArticleLeft content={homePageArticles[0]} />
    <ArticleRight content={homePageArticles[1]} />
    <ArticleLeft content={homePageArticles[2]} />
  </>
);

export default LandingPage;
