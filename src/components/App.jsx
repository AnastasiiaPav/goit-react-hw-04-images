import { fetchImages } from 'ApiImg';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery';
import { SearchBar } from './Searchbar';

export class App extends Component {
  state = {
    searchReq: '',
    page: 1,
    gallery: [],
    status: 'idle',
    error: null,
  };

  componentDidUpdate(prewProps, prevState) {
    // const hits = data.hits;
    const { searchReq, gallery, page } = this.state;
    if (prevState.searchReq !== searchReq || prevState.page !== page) {
      this.setState({status: 'pending'})
      fetchImages(searchReq, page)
        .then(res => res.json())
        .then(data => {
          this.setState({ status: 'ok'})
          const hits = data.hits;
          this.setState({ gallery: prevState.searchReq !== searchReq ? [...hits] : [...gallery, ...hits] });
          // this.setState ({gallery: hits})

          if (hits.length === 0) {
            return Promise.reject(
              new Error(`We can't find pictures with ${searchReq}`)
            );
          }
        });
    }
  }

  onShowMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    // window.scrollTo(0,document.body.scrollHeight)
  };

  onSearchSubmit = querty => {
    console.log(querty);
    this.setState({
      searchReq: querty,
      page: 1,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGallery
          status={this.state.status}
          gallery={this.state.gallery}
          onShowMore={this.onShowMore}
        />
      </div>
    );
  }
}
