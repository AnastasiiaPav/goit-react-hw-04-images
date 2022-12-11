import { fetchImages } from 'ApiImg';
import { useState,useEffect } from 'react';
import { ImageGallery } from './ImageGallery';
import { SearchBar } from './Searchbar';

export const App = () => {
  const [searchReq , setsearchReq] = useState('')
  const [ page, setPage] = useState(1)
  const [gallery, setGallyry] = useState([])
  const [ status, setStatus] = useState('idle')
useEffect(() => {
  if(!searchReq){
    return
  }
  setStatus('pending')
  fetchImages(searchReq, page)
          .then(res => res.json())
          .then(data => {
            const hits = data.hits;
          setGallyry([...gallery, ...hits]);
            setStatus('ok')
          
  
            if (hits.length === 0) {
              return Promise.reject(
                new Error(`We can't find pictures with ${searchReq}`)
              );
            }})
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [searchReq, page])

 const onShowMore = () => {
  setPage(prevState => (
       prevState + 1
    ));
  };

 const onSearchSubmit = querty => {
    setsearchReq(querty)
    setPage(1)
    setGallyry([])

  };


    return (
      <div>
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageGallery
          status={status}
          gallery={gallery}
          onShowMore={onShowMore}
        />
      </div>
    );
  }

