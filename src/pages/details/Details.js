import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Recommendation from './carousels/Recommendation';
import Similar from './carousels/Similar';
import Cast from './cast/Cast';
import DetailsBannner from './detailsBanner/DetailsBannner';
import "./style.scss";
import VideosSection from './videoSection/VideoSection';

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading  } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);



  return (
    <div>
      <DetailsBannner video={data
        ?.results[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details