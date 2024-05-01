import Footer from "../footer/Footer";
import Header from "../header/Header";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';


function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


function Galerie() {
  return (
    <div className="Galerie">
     
     <header>
        <div className='pb-5'>
            <Header />
        </div>
      </header>

      <body>
        <div className='container pt-5'>
            <div className="row">
              <div className="col">
                <ImageList
                    sx={{
                      width: 350,
                      height: 600,
                      // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                      transform: 'translateZ(0)',
                    }}
                    rowHeight={200}
                    gap={1}
                  >
                    {itemData.map((item) => {
                      const cols = item.featured ? 2 : 1;
                      const rows = item.featured ? 2 : 1;

                      return (
                        <ImageListItem key={item.img} cols={cols} rows={rows}>
                          <img
                            {...srcset(item.img, 250, 200, rows, cols)}
                            alt={item.title}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            sx={{
                              background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            }}
                            title={item.title}
                            position="top"
                            actionIcon={
                              <IconButton
                                sx={{ color: 'white' }}
                                aria-label={`star ${item.title}`}
                              >
                                <StarBorderIcon />
                              </IconButton>
                            }
                            actionPosition="left"
                          />
                        </ImageListItem>
                      );
                    })}
                  </ImageList>
              </div>
            </div>
        </div>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Galerie;


const itemData = [
  {
    img: 'https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png',
    title: 'React js',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://topdev.vn/blog/wp-content/uploads/2023/03/cau-hoi-phong-van-angular-developers.png',
    title: 'Angular js',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://cloud.z.com/vn/wp-content/uploads/2023/02/image1-20.png',
    title: 'Bootstrap',
    author: '@helloimnik',
  },
  {
    img: 'https://picx.zhimg.com/v2-c58e0f7ec9c223ccf42dcaa07904a5c8_720w.jpg?source=172ae18b',
    title: 'Node js',
    author: '@nolanissac',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.DN7ToydkJZEdVaJVK_NhvwAAAA?rs=1&pid=ImgDetMain',
    title: 'JavaScript',
    author: '@tjdragotta',
  },
  {
    img: 'https://th.bing.com/th/id/R.34cd4d69fa04e5b40c8d1966c6510e75?rik=Qpy%2fhUIA96BcOA&pid=ImgRaw&r=0',
    title: 'Poste de travail',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://i.pinimg.com/originals/c8/e4/3a/c8e43a15e26066ad84e8c86e672faef3.jpg',
    title: 'C Sharp',
    author: '@hjrc33',
  },
  {
    img: 'https://th.bing.com/th/id/R.49f81ba9c837e6b0abbb4601f88430c6?rik=leTBggQOAr2C4Q&pid=ImgRaw&r=0',
    title: 'GitHub',
    author: '@katie_wasserman',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.Jgs7k1H6NQ3myYg8rpNurQHaD-?w=900&h=483&rs=1&pid=ImgDetMain',
    title: 'HTML - CSS',
    author: '@silverdalex',
  },
  {
    img: 'https://th.bing.com/th/id/R.977f0445f61bf6a62dbb793a1120043f?rik=5C9SQG0unaj%2bng&pid=ImgRaw&r=0',
    title: 'Java',
    author: '@shelleypauls',
  },
  {
    img: 'https://digiato.com/wp-content/uploads/2020/12/Encryption.jpg',
    title: 'Securitée informatique',
    author: '@nolanissac',
  },
  {
    img: 'https://th.bing.com/th/id/OIP.SboJBHuD5NqUtcHb_89YgAHaC9?w=800&h=320&rs=1&pid=ImgDetMain',
    title: 'MySql',
    author: '@southside_customs',
  },
];
