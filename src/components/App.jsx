import { useState, useEffect } from 'react';
import Scroll from 'react-scroll';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { LoadMoreBtn } from './button/Button';
import { Loader } from './loader/Loader';
import axios from 'axios';
import { Modal } from './modal/Modal';

const myAPI_KEY = '33589434-498505a5cafca5b4759d2d286';

export const App = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [imgStore, setImgStore] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [largeImg, setLargeImg] = useState(null);
  const [error, setError] = useState(null);
  const [isQuery, setIsQuery] = useState('start');
  const [typeRequest, setTypeRequest] = useState('');
  const [modalOpen, setModalOpen] = useState('close');

  const scroll = Scroll.animateScroll;

  const getImageApi = (queryStr = query) => {
    axios
      .get(
        `https://pixabay.com/api/?q=${queryStr}&page=${page}&key=${myAPI_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )

      .then(response => {
        if (typeRequest === 'search') {
          setLoading(false);
          setIsQuery(
            response.data.hits.length !== 0 ? 'seccefull' : 'badQuary'
          );
          setImgStore([...response.data.hits]);
        } else {
          setLoading(false);
          setIsQuery(
            response.data.hits.length !== 0 ? 'seccefull' : 'badQuary'
          );
          setImgStore([...imgStore, ...response.data.hits]);
        }
        scroll.scrollToBottom();
      })
      .catch(error => setError(error.message));
    // .finally(this.setState({ loading: false }));
  };

  useEffect(() => {
    if (loading) {
      getImageApi();
    }
  }, [loading]);

  const onSubmitForm = event => {
    setQuery(event);
    setPage(1);
    setLoading(true);
    setTypeRequest('search');
    // getImageApi(event);
  };

  const onLoadMoreHandler = () => {
    setLoading(true);
    setPage(page + 1);
    setTypeRequest('loadMore');
  };

  const onPictureClick = img => {
    setModalOpen('open');
    setLargeImg(img.target.src);
  };

  const onHandleCloseModal = e => {
    if (modalOpen === 'open') {
      setLargeImg(null);
      setModalOpen('closed');
    }
  };

  return (
    <div onClick={onHandleCloseModal}>
      <Searchbar onSubmit={onSubmitForm} />

      {!loading && (
        <ImageGallery imgStore={imgStore} onPictureClick={onPictureClick} />
      )}

      {error || (isQuery === 'badQuary' && <h1>Is bad query</h1>)}

      {modalOpen === 'open' && (
        <Modal largeImg={largeImg} onHandleCloseModal={onHandleCloseModal} />
      )}

      <LoadMoreBtn
        onLoadMoreHandler={onLoadMoreHandler}
        isLoadingImg={imgStore.length < perPage ? false : true}
      />
      {loading && <Loader />}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     query: '',
//     loading: false,
//     imgStore: [],
//     page: 1,
//     perPage: 12,
//     largeImg: null,
//     error: null,
//     isQuery: 'start',
//     typeRequest: '',
//     modalOpen: 'close',
//   };

//   scroll = Scroll.animateScroll;
//   // badQuary, seccefull

//   myAPI_KEY = '33589434-498505a5cafca5b4759d2d286';
//   getImageApi = (query = this.state.query) => {
//     // this.setState({ loading: true });
//     axios
//       .get(
//         `https://pixabay.com/api/?q=${query}&page=${this.state.page}&key=${this.myAPI_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
//       )

//       .then(response => {
//         if (this.state.typeRequest === 'search') {
//           this.setState({
//             ...this.state,
//             loading: false,
//             isQuery: response.data.hits.length !== 0 ? 'seccefull' : 'badQuary',
//             imgStore: [...response.data.hits],
//           });
//         } else {
//           this.setState({
//             ...this.state,
//             loading: false,
//             isQuery: response.data.hits.length !== 0 ? 'seccefull' : 'badQuary',
//             imgStore: [...this.state.imgStore, ...response.data.hits],
//           });
//         }
//         this.scroll.scrollToBottom();
//       })
//       .catch(error => this.setState({ error: error.message }));
//     // .finally(this.setState({ loading: false }));
//   };

//   componentDidUpdate() {
//     if (this.state.loading) {
//       this.getImageApi();
//     }
//   }
//   onSubmitForm = query => {
//     this.setState({
//       ...this.state,
//       query,
//       page: 1,
//       loading: true,
//       typeRequest: 'search',
//     });
//     this.getImageApi(query);
//   };

// onLoadMoreHandler = () => {
//   this.setState({
//     ...this.state,
//     loading: true,
//     page: this.state.page + 1,
//     typeRequest: 'loadMore',
//   });
// };

//   onPictureClick = img => {
//     this.setState({
//       ...this.state,
//       modalOpen: 'open',
//       largeImg: img.target.src,
//     });
// };
//   onHandleCloseModal = e => {
//     if (this.state.modalOpen === 'open') {
//       this.setState({
//         ...this.state,
//         largeImg: null,
//         modalOpen: 'closed',
//       });
//     }
//   };
//   onEscCloseModal = e => {
//     if (e.key === 'Escape') {
//       this.onHandleCloseModal();
//     }
//   };

//   render() {
//     return (
//       <div onClick={this.onHandleCloseModal}>
//         <Searchbar onSubmit={this.onSubmitForm} />

//         {!this.state.loading && (
//           <ImageGallery
//             imgStore={this.state.imgStore}
//             onPictureClick={this.onPictureClick}
//           />
//         )}
//         {this.state.error ||
//           (this.state.isQuery === 'badQuary' && <h1>Is bad query</h1>)}
//         {this.state.modalOpen === 'open' && (
//           <Modal
//             largeImg={this.state.largeImg}
//             onEscCloseModal={this.onEscCloseModal}
//           />
//         )}

//         <LoadMoreBtn
//           onLoadMoreHandler={this.onLoadMoreHandler}
//           isLoadingImg={
//             this.state.imgStore.length < this.state.perPage ? false : true
//           }
//         />
//         {this.state.loading && <Loader />}
//       </div>
//     );
//   }
// }
