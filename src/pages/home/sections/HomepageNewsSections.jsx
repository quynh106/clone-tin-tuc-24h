/**
 * HomepageNewsSections
 * JSX được chuyển từ khu vực tương ứng trong HTML trang chủ 24h nguồn.
 * Giữ nguyên class và thứ tự DOM để tái sử dụng homeOriginal.css.
 */
function HomepageNewsSections() {
  return (
    <section className='box-2coll-many-24h'>
      <div className='container mar-auto'>
        <div className='row'>
          <div className='col-6 col-l'>
            <section className='cate-news-24h-r'>
              <div className='box-t d-flex align-items-center mar-b-15'>
                <header className='cate-news-24h-r__tit color-24h flex-auto pos-rel'>
                  <h2>
                    <a className='fw-bold text-uppercase color-24h' href='https://www.24h.com.vn/tin-tuc-trong-ngay-c46.html' style={{"color": "#78B43D"}}>
                      Tin tức trong ngày
                    </a>
                  </h2>
                </header>
                <ul className='cate-news-24h-r_cate d-flex align-items-center'>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/an-ninh-xa-hoi-c51.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      An ninh - Xã hội
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/media-24h-c762.html' style={{"color": "#666888", "backgroundColor": "#FFFFFF"}}>
                      Multimedia
                    </a>
                  </li>
                </ul>
              </div>
              <article className='cate-news-24h-r-big d-flex mar-b-20'>
                <figure className='cate-news-24h-r-big__img pos-rel mar-r-20'>
                  <a href='https://www.24h.com.vn/tin-tuc-trong-ngay/so-phan-12-du-an-muong-thanh-tai-ha-noi-hang-muc-nao-duoc-ton-tai-phan-nao-buoc-pha-do-c46a1807056.html'>
                    <img alt='&#39;Số phận&#39; 12 dự án Mường Thanh tại Hà Nội: Hạng mục nào được tồn tại, phần nào buộc phá dỡ?' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/untitled-1793352630-692-width740height495.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                    <div className='icon-cate icon-cate-info pos-ab'>
                      <svg className='vertical-mid' xmlns='http://www.w3.org/2000/svg'>
                        <use xlinkHref='#icon-cate-info'></use>
                      </svg>
                    </div>
                  </a>
                </figure>
                <div className='cate-news-24h-r-big__info flex-1 mw-0'>
                  <header className='cate-news-24h-r-big__tit mar-b-5'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807056' href='https://www.24h.com.vn/tin-tuc-trong-ngay/so-phan-12-du-an-muong-thanh-tai-ha-noi-hang-muc-nao-duoc-ton-tai-phan-nao-buoc-pha-do-c46a1807056.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        'Số phận' 12 dự án Mường Thanh tại Hà Nội: Hạng mục nào được tồn tại, phần nào buộc phá dỡ?
                      </a>
                    </h3>
                  </header>
                  <div className='cate-news-24h-r-big__sum text-trun line-cl-3'>
                    <p style={{"color": "#7D7D7D"}}>
                      Để giải quyết dứt điểm tình trạng xây dựng sai phép, vượt quy hoạch gây áp lực lên hạ tầng tại 12 dự án Mường Thanh, Hà Nội đã chốt cơ chế xử lý đặc thù dựa trên Luật Thủ...
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='cate-news-24h-r'>
              <div className='box-t d-flex align-items-center mar-b-15'>
                <header className='cate-news-24h-r__tit color-24h flex-auto pos-rel'>
                  <h2>
                    <a className='fw-bold text-uppercase color-24h' href='https://www.24h.com.vn/bong-da-c48.html' style={{"color": "#78B43D"}}>
                      Bóng đá
                    </a>
                  </h2>
                </header>
                <ul className='cate-news-24h-r_cate d-flex align-items-center'>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/the-thao-c101.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Thể thao
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/video-highlight-c953.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Video
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/bong-da-ngoai-hang-anh-c149.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Ngoại hạng Anh
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Lịch thi đấu
                    </a>
                  </li>
                </ul>
              </div>
              <article className='cate-news-24h-r-big d-flex mar-b-20'>
                <figure className='cate-news-24h-r-big__img pos-rel mar-r-20'>
                  <a href='https://www.24h.com.vn/bong-da/tielemans-canh-bao-mu-dung-sa-thai-carrick-martinez-co-dai-gia-san-don-c48a1807050.html'>
                    <img alt='Tielemans cảnh báo MU đừng sa thải Carrick, Martinez có đại gia săn đón' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/234243-495-1793351827-151-width740height495.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                  </a>
                </figure>
                <div className='cate-news-24h-r-big__info flex-1 mw-0'>
                  <header className='cate-news-24h-r-big__tit mar-b-5'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807050' href='https://www.24h.com.vn/bong-da/tielemans-canh-bao-mu-dung-sa-thai-carrick-martinez-co-dai-gia-san-don-c48a1807050.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Tielemans cảnh báo MU đừng sa thải Carrick, Martinez có đại gia săn đón
                      </a>
                    </h3>
                  </header>
                  <div className='cate-news-24h-r-big__sum text-trun line-cl-3'>
                    <p style={{"color": "#7D7D7D"}}>
                      Tielemans cho biết MU lúc này cần sự ổn định và sa thải HLV Carrick sẽ không phải ý hay.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 col-l'>
            <section className='cate-news-24h-r'>
              <div className='box-3-coll mar-b-15 row'>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/tin-tuc-trong-ngay/ha-noi-khoi-to-nguoi-dieu-khien-can-cau-khien-mot-phu-nu-tu-vong-c46a1807124.html'>
                        <img alt='Hà Nội: Khởi tố người điều khiển cần cẩu khiến một phụ nữ tử vong' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793372261-b16a2c3527--0593-54-0-834-1248-crop-__anh_cat_3_2.png' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807124' href='https://www.24h.com.vn/tin-tuc-trong-ngay/ha-noi-khoi-to-nguoi-dieu-khien-can-cau-khien-mot-phu-nu-tu-vong-c46a1807124.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Hà Nội: Khởi tố người điều khiển cần cẩu khiến một phụ nữ tử vong
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/tin-tuc-trong-ngay/pho-duc-nam-khai-ra-trum-cuoi-dung-dau-chuoi-lua-dao-chiem-doat-hon-1500-ty-c46a1807126.html'>
                        <img alt='Phó Đức Nam khai ra ‘trùm cuối&#39; đứng đầu chuỗi lừa đảo chiếm đoạt hơn 1.500 tỷ' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/untitled-1793373518-670-width740height495.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807126' href='https://www.24h.com.vn/tin-tuc-trong-ngay/pho-duc-nam-khai-ra-trum-cuoi-dung-dau-chuoi-lua-dao-chiem-doat-hon-1500-ty-c46a1807126.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Phó Đức Nam khai ra ‘trùm cuối' đứng đầu chuỗi lừa đảo chiếm đoạt hơn 1.500 tỷ
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/tin-tuc-trong-ngay/vu-gia-cuong-thi-di-duong-gay-xon-xao-mang-xa-hoi-o-an-giang-3-nguoi-bi-xu-phat-c46a1807123.html'>
                        <img alt='Vụ giả &#39;cương thi&#39; đi đường gây xôn xao mạng xã hội ở An Giang, 3 người bị xử phạt' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/1793371834-110-thumbnail-width740height495_anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807123' href='https://www.24h.com.vn/tin-tuc-trong-ngay/vu-gia-cuong-thi-di-duong-gay-xon-xao-mang-xa-hoi-o-an-giang-3-nguoi-bi-xu-phat-c46a1807123.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Vụ giả 'cương thi' đi đường gây xôn xao mạng xã hội ở An Giang, 3 người bị xử...
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='cate-news-24h-r'>
              <div className='box-3-coll mar-b-15 row'>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/bong-da/ca-4-doi-trong-bang-dau-cua-viet-nam-chot-xong-quan-xanh-truoc-them-asian-cup-2027-c48a1807070.html'>
                        <img alt='Cả 4 đội trong bảng đấu của Việt Nam chốt xong &#39;quân xanh&#39; trước thềm Asian Cup 2027' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793353851-3086132523-viet-nam-uae-1__anh_cat_3_2.webp' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807070' href='https://www.24h.com.vn/bong-da/ca-4-doi-trong-bang-dau-cua-viet-nam-chot-xong-quan-xanh-truoc-them-asian-cup-2027-c48a1807070.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Cả 4 đội trong bảng đấu của Việt Nam chốt xong 'quân xanh' trước thềm Asian Cup...
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/bong-da/hlv-cristiano-roland-u17-viet-nam-tich-luy-kinh-nghiem-quy-gia-cho-world-cup-c48a1807096.html'>
                        <img alt='HLV Cristiano Roland: U17 Việt Nam tích luỹ kinh nghiệm quý giá cho World Cup' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793359358-d66a262b6a-roland__anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807096' href='https://www.24h.com.vn/bong-da/hlv-cristiano-roland-u17-viet-nam-tich-luy-kinh-nghiem-quy-gia-cho-world-cup-c48a1807096.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          HLV Cristiano Roland: U17 Việt Nam tích luỹ kinh nghiệm quý giá cho World Cup
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/bong-da/tuyen-viet-nam-hlv-kim-sang-sik-thap-thom-theo-nhip-dau-v-league-c48a1807052.html'>
                        <img alt='Tuyển Việt Nam: HLV Kim Sang Sik thấp thỏm theo nhịp đấu V-League' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793351941-b8f16a3af3-tuyen-viet-nam-hlv-kim-sa__anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                        <div className='icon-cate icon-cate-video pos-ab'>
                          <svg className='vertical-mid' xmlns='http://www.w3.org/2000/svg'>
                            <use xlinkHref='#icon-cate-video'></use>
                          </svg>
                        </div>
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807052' href='https://www.24h.com.vn/bong-da/tuyen-viet-nam-hlv-kim-sang-sik-thap-thom-theo-nhip-dau-v-league-c48a1807052.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Tuyển Việt Nam: HLV Kim Sang Sik thấp thỏm theo nhịp đấu V-League
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 col-l'>
            <section className='cate-news-24h-r'>
              <div className='box-2-coll padd-t-15'>
                <div className='row'>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/an-ninh-xa-hoi/ha-noi-khoi-to-nguoi-phu-nu-nem-mam-tom-vao-chu-tiem-banh-ngot-c51a1807095.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Hà Nội: Khởi tố người phụ nữ ném mắm tôm vào chủ tiệm bánh ngọt
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/tin-tuc-quoc-te/quai-vat-tren-khong-ch-47-chinook-xoay-vong-lao-thang-xuong-dat-o-bosnia-4-nguoi-thiet-mang-c415a1807051.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        'Quái vật trên không' CH-47 Chinook xoay vòng lao thẳng xuống đất ở Bosnia, 4 người thiệt mạng
                        <span className='icon-tick-cate icon-tick-video short_video d-inline-block lh-100 mar-l-3'>
                          <svg id='prefix__Layer_1' version='1.1' viewBox='0 0 12 18' xmlns='http://www.w3.org/2000/svg'>
                            <defs></defs>
                            <path className='prefix__short_video' d='M10 18H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M2 1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1z'></path>
                            <path className='prefix__short_video' d='m8.4 9-4-2.9v5.8z'></path>
                          </svg>
                        </span>
                      </a>
                    </h3>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='cate-news-24h-r'>
              <div className='box-2-coll padd-t-15'>
                <div className='row'>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/bong-da/dieu-chinh-lich-v-league-vi-u23-viet-nam-c48a1807097.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Điều chỉnh lịch V-League vì U23 Việt Nam
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/the-thao/video-tennis-alcaraz-paul-tie-break-dinh-doat-vienna-open-c101a1807125.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Video tennis Alcaraz - Paul: Tie break định đoạt (Vienna Open)
                        <span className='icon-tick-cate icon-tick-cate-video-hight d-inline-block lh-100 mar-l-3'>
                          <svg className='d-block' xmlns='http://www.w3.org/2000/svg'>
                            <use xlinkHref='#icon-tick-cate-video-hight'></use>
                          </svg>
                        </span>
                      </a>
                    </h3>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='mxh-24h-h'>
          <section className='mxh-24h pos-rel bg-white mar-t-30 mar-b-30'>
            <header className='mxh-24h-t pos-rel d-flex align-items-center padd-l-30 overflow-h' style={{"backgroundImage": "linear-gradient(90deg, #ecffda 0%, #d1edff 100%)"}}>
              <figure className='mxh-24h-logo mar-r-25'>
                <a className='d-block' href='https://www.24h.com.vn/mxh/' rel='nofollow'>
                  <img alt='Tin tức bóng đá, thể thao, giải trí | Đọc tin tức 24h mới nhất' className='img-fluid img-scale-down initial loading' data-src='https://cdn-mxh24h.24hstatic.com/images/logo-mxh24h.png' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/images/logo-mxh24h.png?3' />
                </a>
              </figure>
              <nav className='mxh-24h-menu'>
                <ul className='d-flex align-items-center'>
                  <li className='mar-r-10'>
                    <a className='d-flex align-items-center justify-content-center text-center bg-white padd-l-10 padd-r-10 color-main hover-color-24h' href='https://www.24h.com.vn/mxh/du-doan-ty-so-tp17545486176894498905794950269594722.html' rel='nofollow'>
                      <span className='color-24h mar-r-5'>
                        #
                      </span>
                      <em className='fw-italic cursor-pointer'>
                        Dự đoán tỷ số
                      </em>
                    </a>
                  </li>
                  <li className='mar-r-10'>
                    <a className='d-flex align-items-center justify-content-center text-center bg-white padd-l-10 padd-r-10 color-main hover-color-24h' href='https://www.24h.com.vn/mxh/premier-league-c17449664956802135485696360799998.html' rel='nofollow'>
                      <span className='color-24h mar-r-5'>
                        #
                      </span>
                      <em className='fw-italic cursor-pointer'>
                        Premier league
                      </em>
                    </a>
                  </li>
                  <li className='mar-r-10'>
                    <a className='d-flex align-items-center justify-content-center text-center bg-white padd-l-10 padd-r-10 color-main hover-color-24h' href='https://www.24h.com.vn/mxh/clb-manchester-united-tp1745460394680998669011277942893466.html' rel='nofollow'>
                      <span className='color-24h mar-r-5'>
                        #
                      </span>
                      <em className='fw-italic cursor-pointer'>
                        CLB Manchester United
                      </em>
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            <div className='mxh-24h-b no-border-t pos-rel padd-l-30 padd-t-15 padd-b-15'>
              <div className='mxh-24h-slide pos-rel'>
                <div className='swiper slide-template-tab-box-mxh24h'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/upload/2-2025/images/2025-06-13/anh-dai-dien-mac-dinh.png' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Anh Tú
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                6 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/gia-nhu-minh-o-lai-villa-loi-ca-cua-cuu-tuyen-trach-vien-ve-tielemans-id1793343349643754545357164210546.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            “Giá như mình ở lại Villa”: Lời cá của cựu tuyển trạch viên về Tielemans
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/3-2026/images/2026-08-18/2-vfmncx-7-68-1787026422-width740height495.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/3-2026/images/2026-08-18/2-vfmncx-7-68-1787026422-width740height495.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Youri Tielemans gia nhập Manchester United với kỳ vọng tiếp tục phát triển...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                1
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                5,1K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://lh3.googleusercontent.com/a/ACg8ocKTs5nRNWIa71TBtbthSXrXj6fptOE41mV4TXyfKXshfr_LTk8=s96-c' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Quân Vũ
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                4 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/cristiano-ronaldo-va-nhung-cot-moc-ghi-ban-vi-dai-trong-su-nghiep-keo-dai-24-nam-id17933527636464337814811184528.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Cristiano Ronaldo và những cột mốc ghi bàn vĩ đại trong sự nghiệp kéo dài 24 năm
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/Ronaldo-ghi-hat-trick-sau-908-ngay-tien-gan-cot-moc-1000-ban-vi-dai-21-1793318548-531-width740height457.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/Ronaldo-ghi-hat-trick-sau-908-ngay-tien-gan-cot-moc-1000-ban-vi-dai-21-1793318548-531-width740height457.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Con đường huyền thoại của Ronaldo Cristiano Ronaldo vừa tiến sát cột mốc...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                2,6K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/upload/2-2025/images/2025-06-13/anh-dai-dien-mac-dinh.png' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Văn Phong
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                5 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/tevez-roi-mu-sang-man-city-la-de-tra-dua-sir-alex-id179334367364409315561391456224572.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Tevez: “Rời MU sang Man City là để trả đũa Sir Alex”
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-29/c1szz-1793256246-671-width740height495.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-29/c1szz-1793256246-671-width740height495.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Carlos Tevez vừa tiết lộ những cuộc trò chuyện với Sir Alex Ferguson khiến...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                3,0K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/upload/2-2025/images/2025-06-13/anh-dai-dien-mac-dinh.png' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Trang Võ
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                6 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/mourinho-be-lai-phut-chot-bernardo-silva-quay-xe-tu-barca-sang-real-id17933431416435279266027954420026.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Mourinho “bẻ lái” phút chót, Bernardo Silva quay xe từ Barca sang Real
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://cdn-mxh24h.24hstatic.com/upload/4-2026/images/2026-10-30/1793343141-897-mxh24h.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://cdn-mxh24h.24hstatic.com/upload/4-2026/images/2026-10-30/1793343141-897-mxh24h.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Bernardo Silva từng bị Real Madrid từ chối và đứng trước khả năng gia nhập...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                1
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                2,5K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/upload/2-2025/images/2025-06-13/anh-dai-dien-mac-dinh.png' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Đình Quý
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                9 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/messi-co-the-roi-inter-miami-nam-2028-ai-cuu-de-che-135-ty-usd-id1793333729641919162507154073466.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Messi có thể rời Inter Miami năm 2028, ai cứu đế chế 1,35 tỷ USD?
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-06/anhdaidien-1791280418-611-width740height495_anh_cat_4_3.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-06/anhdaidien-1791280418-611-width740height495_anh_cat_4_3.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Lionel Messi có thể rời Inter Miami khi hợp đồng kết thúc vào năm 2028, dù...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                1
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                3,4K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/upload/2-2025/images/2025-06-13/anh-dai-dien-mac-dinh.png' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Bá Thắng
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                3 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/messi-o-nha-khac-xa-tren-san-kho-chieu-thich-mot-minh-va-khong-gioi-noi-loi-yeu-id17933531686465007471852781343167954.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Messi ở nhà khác xa trên sân: Khó chiều, thích một mình và không giỏi nói lời yêu
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-23/duoc-de-cu-Qua-bong-vang-Messi-van-khong-chac-du-Gala-messi-qu----b--ng-v--ng-ok-1-copy-1792747497-553-width740height493.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-23/duoc-de-cu-Qua-bong-vang-Messi-van-khong-chac-du-Gala-messi-qu----b--ng-v--ng-ok-1-copy-1792747497-553-width740height493.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Những góc nhìn về một Messi rất khác Trong cuộc phỏng vấn với Luzu TV...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                1,0K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/upload/2-2025/images/2025-06-13/anh-dai-dien-mac-dinh.png' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Ngọc Nguyễn
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                7 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/gary-neville-nha-glazer-phai-ban-toan-bo-mu-du-roi-id179334295764384864914161198194197.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Gary Neville: “Nhà Glazer phải bán toàn bộ MU, đủ rồi”
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/2-2026/images/2026-06-04/skysports-glazer-family-man-utd_5370958-1780534606-142-width1600height900.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/2-2026/images/2026-06-04/skysports-glazer-family-man-utd_5370958-1780534606-142-width1600height900.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Gary Neville yêu cầu nhà Glazer bán toàn bộ Manchester United trong bối...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                2
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                2,0K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://cdn-mxh24h.24hstatic.com/upload/2-2025/images/2025-06-13/anh-dai-dien-mac-dinh.png' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Xuân Nam
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                5 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/mu-khung-hoang-rooney-noi-gian-con-schmeichel-khoi-lai-tranh-cai-ve-hojlund-id179334349264400440481623636874.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            MU khủng hoảng, Rooney nổi giận còn Schmeichel khơi lại tranh cãi về Hojlund
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-03/frsbjnb-1791023031-374-width740height495_anh_cat_4_3.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-03/frsbjnb-1791023031-374-width740height495_anh_cat_4_3.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Manchester United chìm trong khủng hoảng sau chuỗi 8 trận liên tiếp không...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                1
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                1,5K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://lh3.googleusercontent.com/a/ACg8ocK9OqIKoOvVGfC-98h-XU9r-CIcJ3t4jI8uy9yvWgj6ditOJg=s96-c' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Hóng VAR
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                5 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/bat-nhu-len-dong-de-gea-van-bat-luc-nhin-fiorentina-truot-doc-tru-hang-id1793343798644136576538407915116295.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Bắt như lên đồng, De Gea vẫn bất lực nhìn Fiorentina trượt dốc trụ hạng
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/2-2026/images/2026-05-11/de-gea-mu-juventus-fiorentina-495-copy-1778483190-251-width740height495_anh_cat_4_3.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/2-2026/images/2026-05-11/de-gea-mu-juventus-fiorentina-495-copy-1778483190-251-width740height495_anh_cat_4_3.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              David de Gea đang đứng trước tương lai khó đoán tại Fiorentina, dù vẫn giữ...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                1
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                1,2K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://lh3.googleusercontent.com/a/ACg8ocKTs5nRNWIa71TBtbthSXrXj6fptOE41mV4TXyfKXshfr_LTk8=s96-c' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Quân Vũ
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                13 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/messi-de-vuot-mat-ronaldo-doat-super-ballon-dor-ly-do-vi-sao-id179333364664198302342308432800411.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Messi dễ vượt mặt Ronaldo đoạt Super Ballon d'Or: Lý do vì sao?
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-24/ronaldo_messi-1792848891-33-width740height495_anh_cat_4_3.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-24/ronaldo_messi-1792848891-33-width740height495_anh_cat_4_3.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Chuỗi ngày toàn điều tốt đẹp với cá nhân Ronaldo Cristiano Ronaldo vừa...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                2
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                1
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                3,6K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://s120-ava-talk.zadn.vn/b/1/4/d/14/120/3d9719e6654c8773ef3fe527a5362187.jpg' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Đoàn Linh
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                2 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/man-utd-kho-xu-tiep-tuc-cho-rashford-hay-day-di-ngay-thang-1-2027-id1793355632646705274438147674413766.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Man Utd khó xử: Tiếp tục chờ Rashford hay đẩy đi ngay tháng 1/2027?
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://cdn-mxh24h.24hstatic.com/upload/4-2026/images/2026-10-30/1793355632-96-mxh24h.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://cdn-mxh24h.24hstatic.com/upload/4-2026/images/2026-10-30/1793355632-96-mxh24h.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              Tình thế khó khăn với Rashford Marcus Rashford đang đứng trước nguy cơ...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                540
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide mar-r-30'>
                      <div className='mxh-24h-items d-flex flex-dir-col h-100 pos-rel'>
                        <div className='mxh-24h-items__t d-flex align-items-center justify-content-between mar-b-10 pos-rel'>
                          <div className='box-l d-flex align-items-center'>
                            <figure className='mxh-24h-items__ava border-radius-999 bg-ccc overflow-h mar-r-10'>
                              <img alt='' className='img-fluid img-cover initial loading' data-was-processed='true' src='https://lh3.googleusercontent.com/a/ACg8ocKTs5nRNWIa71TBtbthSXrXj6fptOE41mV4TXyfKXshfr_LTk8=s96-c' />
                            </figure>
                            <div className='mxh-24h-items__r flex-1'>
                              <p className='mxh-24h-items__name color-main mar-b-5'>
                                Quân Vũ
                              </p>
                              <time className='mxh-24h-items__create d-block'>
                                16 giờ trước
                              </time>
                            </div>
                          </div>
                        </div>
                        <div className='d-flex flex-dir-col flex-1 pos-rel'>
                          <a className='link-cover pos-ab' href='https://www.24h.com.vn/mxh/toc-do-ghi-ban-cua-mbappe-sanh-ngang-huyen-thoai-chi-thua-4-tuong-dai-tai-real-id179332501963750509709109612560.html?utm_source=web24h&amp;utm_medium=box_tin&amp;utm_term=pc&amp;utm_campaign=home' rel='nofollow'></a>
                          <div className='mxh-24h-items__tit flex-1 mar-b-10 fw-bold'>
                            Tốc độ ghi bàn của Mbappé sánh ngang huyền thoại, chỉ thua 4 tượng đài tại Real
                          </div>
                          <div className='mxh-24h-items__info box-img d-flex align-items-center overflow-h'>
                            <figure className='mxh-24h-items__img pos-rel bg-ccc overflow-h mar-r-10'>
                              <figure className='mxh-24h-items__blur pos-ab'>
                                <img alt='' className='img-fluid img-cover' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-26/Mbappe-lap-ky-luc-100-ban-cho-Real-Tottenham-pha-dop-lich-su-truoc-Chelsea-mabppe_ngoisao1-1793016484-284-width740height493.jpg' />
                              </figure>
                              <img alt='' className='img-fluid img-scale-down d-block pos-rel loading' fetchPriority='high' src='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-26/Mbappe-lap-ky-luc-100-ban-cho-Real-Tottenham-pha-dop-lich-su-truoc-Chelsea-mabppe_ngoisao1-1793016484-284-width740height493.jpg' />
                            </figure>
                            <div className='mxh-24h-items__sum padd-r-10'>
                              100 bàn, 116 trận và vị trí trong phòng truyền thống Kylian Mbappé cán...
                            </div>
                          </div>
                          <div className='mxh-24h-items__act d-flex align-items-center justify-content-between1 mar-t-10'>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-like-status-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                2
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center cursor-pointer mar-r-15'>
                              <svg className='icon-svg mar-r-5' xmlns='http://www.w3.org/2000/svg'>
                                <use xlinkHref='#icon-comment-mxh'></use>
                              </svg>
                              <span className='text' id=''>
                                0
                              </span>
                            </div>
                            <div className='box-items d-flex align-items-center'>
                              <svg className='icon-svg icon-share mar-r-5' fill='#4c4c4c' viewBox='0 0 576 512' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7A356 356 0 0 0 49.4 256C63 286 89.6 328.5 128 364.3c41.2 38.1 94.8 67.7 160 67.7s118.8-29.6 159.9-67.7A356 356 0 0 0 526.6 256 357 357 0 0 0 448 147.7C406.8 109.6 353.2 80 288 80M95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6a399 399 0 0 1 93 131.1 32 32 0 0 1 0 24.6 398 398 0 0 1-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6A396 396 0 0 1 2.5 268.3a32 32 0 0 1 0-24.6 396 396 0 0 1 92.9-131.1M288 336a80 80 0 1 0 0-160h-2a64 64 0 0 1-78 78v2a80 80 0 0 0 80 80m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256'></path>
                              </svg>
                              <span className='text' id=''>
                                3,3K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slide-pagi-template-tab-box-mxh24h' style={{"display": "none"}}></div>
                <div id='slide-prev-template-tab-box-mxh24h'>
                  <div className='mxh-24h-slide-btn btn-l pos-ab d-flex align-items-center justify-content-center cursor-pointer z-index-1'>
                    <svg className='icon-svg' xmlns='http://www.w3.org/2000/svg'>
                      <use xlinkHref='#icon-arrow-mxh'></use>
                    </svg>
                  </div>
                </div>
                <div id='slide-next-template-tab-box-mxh24h'>
                  <div className='mxh-24h-slide-btn btn-r pos-ab d-flex align-items-center justify-content-center cursor-pointer z-index-1'>
                    <svg className='icon-svg' xmlns='http://www.w3.org/2000/svg'>
                      <use xlinkHref='#icon-arrow-mxh'></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-center mar-t-15'>
                <a className='mxh-24h-btn padd-l-20 d-flex align-items-center justify-content-center text-center color-white' href='https://www.24h.com.vn/mxh/' rel='nofollow'>
                  Fan bóng đá nói gì? Click để xem
                  <span className='icon-arr color-white mar-l-5'>
                    <svg className='icon-svg' xmlns='http://www.w3.org/2000/svg'>
                      <use xlinkHref='#icon-arrow-mxh'></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <svg aria-hidden='true' style={{"position": "absolute", "width": "0", "height": "0", "overflow": "hidden"}} xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <symbol fill='currentColor' id='icon-arrow-mxh' version='1.2' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'>
                <path d='M800 400c0 221-179.1 400-400 400S0 621 0 400 179.1 0 400 0s400 179 400 400m-464.6 0 178-178a25.1 25.1 0 0 0 0-35.5c-9.8-9.8-25.6-9.8-35.4 0L286.6 378c-6 6-7.8 14.3-6.5 22-1.3 7.8.5 16 6.5 22L478 613.5c9.8 9.8 25.6 9.8 35.4 0 9.8-10 9.8-25.8 0-35.5z' fillRule='evenodd'></path>
              </symbol>
              <symbol id='icon-play-video-mxh' viewBox='0 0 803 803'>
                <path d='M799.8 386.9A400.5 400.5 0 0 0 413.1.2a397 397 0 0 0-300.4 121.5c-76 78.5-116 182-112.5 291.4a400.5 400.5 0 0 0 386.7 386.7l13.1.2a397 397 0 0 0 287.3-121.7c76-78.5 116-182 112.5-291.4m-173 232.8A314 314 0 0 1 400 715.8l-10.4-.2A316 316 0 0 1 84.4 410.4a314 314 0 0 1 88.8-230.1A314 314 0 0 1 400 84.2l10.4.2a316 316 0 0 1 305.2 305.2 314 314 0 0 1-88.8 230.1' fill='#fff'></path>
                <path d='M531.2 376.8 353.8 249.6a28.5 28.5 0 0 0-45.2 23.2v254.4a28.5 28.5 0 0 0 45.2 23.2l177.4-127.2a28.5 28.5 0 0 0 0-46.4' fill='#fff'></path>
              </symbol>
              <symbol id='icon-comment-mxh' viewBox='0 0 20 20'>
                <path d='M19.8 9.9c0 5.4-4.3 9.7-9.7 9.7-1.6 0-3.2-.4-4.6-1.1l-3.2 1c-.8.3-1.6-.1-1.9-.9q-.2-.5 0-.9l1.1-3.2a9.64 9.64 0 0 1 4-13.2 9.66 9.66 0 0 1 14.3 8.6m-1.5 0A8.26 8.26 0 1 0 2.9 14q.2.3.1.6l-1.2 3.5L5.3 17q.1-.1.3-.1t.3.1a8.2 8.2 0 0 0 12.4-7.1m-3 0c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1.5-1.1 1.1-1.1 1.1.5 1.1 1.1m-4.1 0c0 .6-.5 1.1-1.1 1.1s-1.2-.5-1.2-1.1.6-1.1 1.2-1.1 1.1.5 1.1 1.1m-4.1 0c0 .6-.5 1.1-1.2 1.1-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1c.7 0 1.2.5 1.2 1.1' fill='#4c4c4c' fillRule='evenodd'></path>
              </symbol>
              <symbol id='icon-like-status-mxh' viewBox='0 0 1142 1121'>
                <path d='M610 .9h-77.5A532 532 0 0 0 .6 532.8v56.1a532 532 0 0 0 531.9 531.9H610a532 532 0 0 0 531.9-531.9v-56.1A532 532 0 0 0 610 .9' fill='#6da030'></path>
                <path d='M606.9.9h-71.3C265.2.9 46.1 223.5 46.1 498.1v52.5c0 274.6 219.1 497.3 489.5 497.3h71.3c270.4 0 489.6-222.7 489.6-497.3v-52.5C1096.5 223.5 877.3.9 606.9.9' fill='#78b43d'></path>
                <path d='M450.3 461.1H278.2c-10.3 0-18.6 9-18.7 20.2L235 805.9c0 11.2 8.4 20.2 18.7 20.2h191.6c2.2 0 3.2-2.7 1.6-4.1-3.9-3.2-7.4-9-7.4-19.5V534.2c.2-27.3 4.7-49 12.9-69.9.6-1.5-.5-3.2-2.1-3.2m406.3 151.3a46.4 46.4 0 0 0 12.5-87.4c-2-1-1.6-3.9.6-4.3a46 46 0 0 0 37.8-44.5 47.5 47.5 0 0 0-47.8-46.7H684.9c-2.1 0-3.3-2.2-2.4-4 3.5-7.2 30.6-74.3 33.2-81.9 24.5-69.7-3.9-125.7-3.9-125.7-15.5-44.7-78.4-39.9-79 7.5-.5 36 4.7 65.6-16.5 88.2-21.4 22.6-66.7 64.9-83.7 92.1-28 45-44.1 76.7-44.2 129.7v235.3c0 23.7 17.7 23.6 17.7 23.7l311.6-.1h.1c15.1 0 29-4.9 36.8-17.2 17.6-27.5 6.8-56.3-14.6-68.3-1.9-1.1-1.3-4.1 1-4.3a46.5 46.5 0 0 0 15-87.7c-2-1-1.6-4 .6-4.4' fill='#fff' fillRule='evenodd'></path>
              </symbol>
            </defs>
          </svg>
        </div>
        <div className='row'>
          <div className='col-6 col-l'>
            <section className='cate-news-24h-r'>
              <div className='box-t d-flex align-items-center mar-b-15'>
                <header className='cate-news-24h-r__tit color-24h flex-auto pos-rel'>
                  <h2>
                    <a className='fw-bold text-uppercase color-24h' href='https://www.24h.com.vn/kinh-doanh-c161.html' style={{"color": "#78B43D"}}>
                      Kinh doanh
                    </a>
                  </h2>
                </header>
                <ul className='cate-news-24h-r_cate d-flex align-items-center'>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/kinh-te-the-gioi-c1106.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Kinh tế thế giới
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/doanh-nhan-c606.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Doanh nhân
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/bat-dong-san-c792.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Bất động sản
                    </a>
                  </li>
                </ul>
              </div>
              <article className='cate-news-24h-r-big d-flex mar-b-20'>
                <figure className='cate-news-24h-r-big__img pos-rel mar-r-20'>
                  <a href='https://www.24h.com.vn/kinh-doanh/chot-gia-vang-hom-nay-ngay-30-10-giam-rat-manh-c161a1807116.html'>
                    <img alt='Chốt giá vàng hôm nay ngày 30/10 giảm rất mạnh' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793367341-71f1431592-gia-vang-hom-nay-ngay-30-__anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                  </a>
                </figure>
                <div className='cate-news-24h-r-big__info flex-1 mw-0'>
                  <header className='cate-news-24h-r-big__tit mar-b-5'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807116' href='https://www.24h.com.vn/kinh-doanh/chot-gia-vang-hom-nay-ngay-30-10-giam-rat-manh-c161a1807116.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Chốt giá vàng hôm nay ngày 30/10 giảm rất mạnh
                      </a>
                    </h3>
                  </header>
                  <div className='cate-news-24h-r-big__sum text-trun line-cl-3'>
                    <p style={{"color": "#7D7D7D"}}>
                      Theo cập nhật giá vàng hôm nay, ngày 30/10, thị trường vàng trong nước giảm mạnh giá vàng miếng và giá vàng nhẫn.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='cate-news-24h-r'>
              <div className='box-t d-flex align-items-center mar-b-15'>
                <header className='cate-news-24h-r__tit color-24h flex-auto pos-rel'>
                  <h2>
                    <a className='fw-bold text-uppercase color-24h' href='https://www.24h.com.vn/thi-truong-tieu-dung-c52.html' style={{"color": "#78B43D"}}>
                      Thị trường tiêu dùng
                    </a>
                  </h2>
                </header>
                <ul className='cate-news-24h-r_cate d-flex align-items-center'>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/gia-xang-gia-dau-hom-nay-c46e1783.html' style={{"color": "#888888", "backgroundColor": "#FFFFFF"}}>
                      Giá xăng
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/xu-huong-tieu-dung-doc-la-c825.html' style={{"color": "#888888", "backgroundColor": "#FFFFFF"}}>
                      Đắt độc lạ
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/thi-truong-24h-c341.html' style={{"color": "#888888", "backgroundColor": "#FFFFFF"}}>
                      Thị trường 24h
                    </a>
                  </li>
                </ul>
              </div>
              <article className='cate-news-24h-r-big d-flex mar-b-20'>
                <figure className='cate-news-24h-r-big__img pos-rel mar-r-20'>
                  <a href='https://www.24h.com.vn/thi-truong-tieu-dung/dan-xa-nay-o-ha-tinh-dua-chim-yen-ve-nuoi-o-vung-bai-nganglam-giau-tu-thu-bo-duong-vi-nhu-vang-trang-c52a1806327.html'>
                    <img alt='Dân xã này ở Hà Tĩnh, đưa chim yến về nuôi ở vùng bãi ngang,làm giàu từ thứ bổ dưỡng ví như “vàng trắng”' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-28/255x170/adt1793156083-fbe7d4991d-h4-1339__anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                  </a>
                </figure>
                <div className='cate-news-24h-r-big__info flex-1 mw-0'>
                  <header className='cate-news-24h-r-big__tit mar-b-5'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1806327' href='https://www.24h.com.vn/thi-truong-tieu-dung/dan-xa-nay-o-ha-tinh-dua-chim-yen-ve-nuoi-o-vung-bai-nganglam-giau-tu-thu-bo-duong-vi-nhu-vang-trang-c52a1806327.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Dân xã này ở Hà Tĩnh, đưa chim yến về nuôi ở vùng bãi ngang,làm giàu từ thứ bổ dưỡng ví như “vàng trắng”
                      </a>
                    </h3>
                  </header>
                  <div className='cate-news-24h-r-big__sum text-trun line-cl-3'>
                    <p style={{"color": "#7D7D7D"}}>
                      Từ nuôi yến lấy tổ đến chế biến sâu, xây dựng thương hiệu và hướng tới OCOP 3 sao, đa dạng hóa sinh kế cho người dân vùng bãi ngang.
                    </p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 col-l'>
            <section className='cate-news-24h-r'>
              <div className='box-3-coll mar-b-15 row'>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/kinh-doanh/so-phan-12-du-an-muong-thanh-tai-ha-noi-hang-muc-nao-duoc-ton-tai-phan-nao-buoc-pha-do-c161a1807065.html'>
                        <img alt='&#39;Số phận&#39; 12 dự án Mường Thanh tại Hà Nội: Hạng mục nào được tồn tại, phần nào buộc phá dỡ?' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793353389-04981aefb3-746e19acf04070c3f9118f35a__anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1807065' href='https://www.24h.com.vn/kinh-doanh/so-phan-12-du-an-muong-thanh-tai-ha-noi-hang-muc-nao-duoc-ton-tai-phan-nao-buoc-pha-do-c161a1807065.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          'Số phận' 12 dự án Mường Thanh tại Hà Nội: Hạng mục nào được tồn tại, phần nào...
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/kinh-doanh/bitcoin-sap-gia-xuong-duoi-77000-usd-giua-thong-tin-binance-bi-hack-hang-ty-usd-c161a1806987.html'>
                        <img alt='Bitcoin &#39;sập&#39; giá: Xuống dưới 77.000 USD giữa thông tin Binance bị hack hàng tỷ USD' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793343320-c62ca47455-bitcoin-1-2240__anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1806987' href='https://www.24h.com.vn/kinh-doanh/bitcoin-sap-gia-xuong-duoi-77000-usd-giua-thong-tin-binance-bi-hack-hang-ty-usd-c161a1806987.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Bitcoin 'sập' giá: Xuống dưới 77.000 USD giữa thông tin Binance bị hack hàng tỷ...
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/kinh-doanh/cay-xanh-cong-minh-va-mang-luoi-quan-xanh-thau-tom-1218-goi-thau-c161a1806921.html'>
                        <img alt='Cây xanh Công Minh và mạng lưới &#39;quân xanh&#39; thâu tóm 1.218 gói thầu' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793329491-56a5fa7f19-anh-man-hinh-2026-10-29-l__anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1806921' href='https://www.24h.com.vn/kinh-doanh/cay-xanh-cong-minh-va-mang-luoi-quan-xanh-thau-tom-1218-goi-thau-c161a1806921.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Cây xanh Công Minh và mạng lưới 'quân xanh' thâu tóm 1.218 gói thầu
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='cate-news-24h-r'>
              <div className='box-3-coll mar-b-15 row'>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/thi-truong-tieu-dung/tuong-meo-bang-vang-nang-58-kg-o-nha-ban-gai-mr-pips-co-the-mang-y-nghia-gi-c52a1806707.html'>
                        <img alt='Tượng mèo bằng vàng nặng 5,8 kg ở nhà bạn gái Mr Pips có thể mang ý nghĩa gì?' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-29/255x170/1793266984-811-thumbnail-width740height495_anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1806707' href='https://www.24h.com.vn/thi-truong-tieu-dung/tuong-meo-bang-vang-nang-58-kg-o-nha-ban-gai-mr-pips-co-the-mang-y-nghia-gi-c52a1806707.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Tượng mèo bằng vàng nặng 5,8 kg ở nhà bạn gái Mr Pips có thể mang ý nghĩa gì?
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/thi-truong-tieu-dung/halloween-can-ke-thi-truong-do-gia-ma-van-e-chong-c52a1806980.html'>
                        <img alt='Halloween cận kề, thị trường đồ &#39;giả ma&#39; vẫn ế' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/adt1793342387-50527a5c3b-tp_haloween-uyen-phuong-5__anh_cat_3_2.webp' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1806980' href='https://www.24h.com.vn/thi-truong-tieu-dung/halloween-can-ke-thi-truong-do-gia-ma-van-e-chong-c52a1806980.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Halloween cận kề, thị trường đồ 'giả ma' vẫn ế
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
                <div className='col-4'>
                  <article className='cate-news-24h-r-sma'>
                    <figure className='cate-news-24h-r-sma__img pos-rel'>
                      <a href='https://www.24h.com.vn/thi-truong-tieu-dung/thu-lao-hon-500000-dong-moi-gio-de-dat-cho-robot-di-dao-c52a1806890.html'>
                        <img alt='Thù lao hơn 500.000 đồng mỗi giờ để dắt chó robot đi dạo' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/1793325477-139-thumbnail-width740height495_anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <header className='cate-news-24h-r-sma__tit mar-t-10'>
                      <h3>
                        <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifvideosport1806890' href='https://www.24h.com.vn/thi-truong-tieu-dung/thu-lao-hon-500000-dong-moi-gio-de-dat-cho-robot-di-dao-c52a1806890.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                          Thù lao hơn 500.000 đồng mỗi giờ để dắt chó robot đi dạo
                        </a>
                      </h3>
                    </header>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 col-l'>
            <section className='cate-news-24h-r'>
              <div className='box-2-coll padd-t-15'>
                <div className='row'>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/kinh-doanh/san-giao-dich-tien-ma-hoa-binance-bi-tan-cong-nha-dau-tu-viet-lo-lang-tien-de-dau-moi-an-toan-c161a1807107.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Sàn giao dịch tiền mã hóa Binance bị tấn công: Nhà đầu tư Việt lo lắng, tiền để đâu mới an toàn?
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/kinh-doanh/binance-he-lo-nguyen-nhan-vu-hack-63-ty-usd-tien-so-tat-ca-co-the-bat-dau-tu-1-chiec-laptop-c161a1806981.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Binance hé lộ nguyên nhân vụ hack 6,3 tỷ USD tiền số, tất cả có thể bắt đầu từ 1 chiếc laptop
                      </a>
                    </h3>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='cate-news-24h-r'>
              <div className='box-2-coll padd-t-15'>
                <div className='row'>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/thi-truong-tieu-dung/moi-nhu-tien-ty-sau-nhung-phien-livestream-khui-ngoc-trai-c52a1806809.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Mồi nhử tiền tỷ sau những phiên livestream khui ngọc trai
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex col-6'>
                    <h3>
                      <a className='d-block fw-medium hover-color-24h color-main' href='https://www.24h.com.vn/thi-truong-tieu-dung/trai-cay-trung-quoc-sieu-re-nho-sua-22000-dong-kg-tao-mat-chi-11000-dong-c52a1806866.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Trái cây Trung Quốc siêu rẻ: Nho sữa 22.000 đồng/kg, táo mật chỉ 11.000 đồng
                      </a>
                    </h3>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 col-l'>
            <section className='cate-news-24h-r coll-2 mar-t-40'>
              <div className='box-t d-flex align-items-center mar-b-15'>
                <header className='cate-news-24h-r__tit color-24h flex-auto pos-rel'>
                  <h2 className='fw-bold text-uppercase'>
                    <a className='fw-bold text-uppercase color-24h' href='https://www.24h.com.vn/tin-tuc-quoc-te-c415.html' style={{"color": "#78B43D"}}>
                      Thế giới
                    </a>
                  </h2>
                </header>
                <ul className='cate-news-24h-r_cate d-flex align-items-center'>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/diem-nong-c704.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Điểm nóng
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/theo-dong-lich-su-c706.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Dòng lịch sử
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/quan-su-c705.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Quân sự
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/dai-ky-c1082.html' style={{"color": "#666666", "backgroundColor": "#FFFFFF"}}>
                      Dài kỳ
                    </a>
                  </li>
                </ul>
              </div>
              <div className='row'>
                <div className='col-245'>
                  <article className='cate-news-24h-r-big'>
                    <figure className='cate-news-24h-r-big__img pos-rel mar-b-15'>
                      <a href='https://www.24h.com.vn/tin-tuc-quoc-te/doi-quan-giau-mat-ukraine-bua-vay-cac-cong-su-nga-c415a1807059.html'>
                        <img alt='Đội quân giấu mặt Ukraine bủa vây các công sự Nga' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/1793354901-595-thumbnail-width740height495_anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <div className='cate-news-24h-r-big__info'>
                      <header className='cate-news-24h-r-big__tit mar-b-5'>
                        <h3>
                          <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifcateeventleft1807059' href='https://www.24h.com.vn/tin-tuc-quoc-te/doi-quan-giau-mat-ukraine-bua-vay-cac-cong-su-nga-c415a1807059.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                            Đội quân giấu mặt Ukraine bủa vây các công sự Nga
                          </a>
                        </h3>
                      </header>
                      <div className='cate-news-24h-r-big__sum text-trun line-cl-3'>
                        <p style={{"color": "#7D7D7D"}}>
                          Ukraine đang tăng cường trang bị súng phóng lựu cho các phương tiện UGV mà không phải trực tiếp tiến vào những khu vực nguy hiểm.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-r flex-1 mw-0'>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/tin-tuc-quoc-te/bo-truong-chien-tranh-my-sa-thai-tuong-cap-cao-vi-ro-ri-bi-mat-quan-su-c415a1807005.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Bộ trưởng Chiến tranh Mỹ sa thải tướng cấp cao vì rò rỉ bí mật quân sự
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/tin-tuc-quoc-te/cuoc-trien-lam-pho-dien-nang-luc-uav-cua-trieu-tien-c415a1807105.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Cuộc triển lãm phô diễn năng lực UAV của Triều Tiên
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/tin-tuc-quoc-te/co-van-cua-ba-melania-tiet-lo-buc-thu-tu-tong-thong-putin-c415a1806787.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Cố vấn của bà Melania tiết lộ bức thư từ Tổng thống Putin
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/tin-tuc-quoc-te/con-gian-cua-dang-cong-hoa-khi-ong-obama-che-nha-trang-nhu-nha-hang-c415a1807002.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Cơn giận của đảng Cộng hòa khi ông Obama chê 'Nhà Trắng như nhà hàng'
                        <span className='icon-tick-cate icon-tick-video d-inline-block lh-100 mar-l-3'>
                          <svg className='d-block' xmlns='http://www.w3.org/2000/svg'>
                            <use xlinkHref='#icon-tick-cate-video'></use>
                          </svg>
                        </span>
                      </a>
                    </h3>
                  </article>
                </div>
              </div>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='cate-news-24h-r coll-2 mar-t-40'>
              <div className='box-t d-flex align-items-center mar-b-15'>
                <header className='cate-news-24h-r__tit color-24h flex-auto pos-rel'>
                  <h2 className='fw-bold text-uppercase'>
                    <a className='fw-bold text-uppercase color-24h' href='https://www.24h.com.vn/suc-khoe-c62.html' style={{"color": "#78B43D"}}>
                      Sức khỏe
                    </a>
                  </h2>
                </header>
                <ul className='cate-news-24h-r_cate d-flex align-items-center'>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/benh-tim-mach-c62e2406.html' style={{"color": "#3B3B3B", "backgroundColor": "#FFFFFF"}}>
                      Bệnh tim
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/tai-bien-mach-mau-nao-c62e4624.html' style={{"color": "#3B3B3B", "backgroundColor": "#FFFFFF"}}>
                      Đột quỵ
                    </a>
                  </li>
                  <li className=''>
                    <a className='d-flex align-items-center h-100 hover-color-24h' href='https://www.24h.com.vn/ung-thu-c62e3457.html' style={{"color": "#3B3B3B", "backgroundColor": "#FFFFFF"}}>
                      Ung thư
                    </a>
                  </li>
                </ul>
              </div>
              <div className='row'>
                <div className='col-245'>
                  <article className='cate-news-24h-r-big'>
                    <figure className='cate-news-24h-r-big__img pos-rel mar-b-15'>
                      <a href='https://www.24h.com.vn/suc-khoe/who-noi-gi-ve-de-xuat-hien-mo-tang-o-nguoi-duoi-18-tuoi-c62a1807102.html'>
                        <img alt='WHO nói gì về đề xuất hiến mô, tạng ở người dưới 18 tuổi?' className='width-100' data-original='https://icdn.24h.com.vn/upload/4-2026/images/2026-10-30/255x170/1793361808-672-thumbnail-width740height495_anh_cat_3_2.jpg' src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' />
                      </a>
                    </figure>
                    <div className='cate-news-24h-r-big__info'>
                      <header className='cate-news-24h-r-big__tit mar-b-5'>
                        <h3>
                          <a className='d-block fw-medium hover-color-24h color-main' data-classgitvideo='taggifcateeventleft1807102' href='https://www.24h.com.vn/suc-khoe/who-noi-gi-ve-de-xuat-hien-mo-tang-o-nguoi-duoi-18-tuoi-c62a1807102.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                            WHO nói gì về đề xuất hiến mô, tạng ở người dưới 18 tuổi?
                          </a>
                        </h3>
                      </header>
                      <div className='cate-news-24h-r-big__sum text-trun line-cl-3'>
                        <p style={{"color": "#7D7D7D"}}>
                          Trưởng đại diện WHO tại Việt Nam cho biết WHO ủng hộ dự thảo Luật mở rộng cơ hội cứu người nhưng cần phải đặt vành đai bảo vệ vững chắc cho trẻ.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
                <div className='col-r flex-1 mw-0'>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/suc-khoe/nuot-phai-dao-lam-khi-an-mi-tom-buoi-sang-c62a1807023.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Nuốt phải dao lam khi ăn mì tôm buổi sáng
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/suc-khoe/them-ca-tu-vong-vi-nao-mo-cau-o-ca-mau-van-chua-tim-duoc-nguon-lay-c62a1806996.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Thêm ca tử vong vì não mô cầu ở Cà Mau, vẫn chưa tìm được nguồn lây
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/suc-khoe/co-gai-tu-vong-sau-khi-giam-thuoc-theo-chatgpt-c62a1806948.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Cô gái tử vong sau khi giảm thuốc theo ChatGPT
                      </a>
                    </h3>
                  </article>
                  <article className='cate-news-24h-r-sma__tit d-flex padd-b-15 mar-b-15'>
                    <h3>
                      <a className='d-block fw-medium color-main hover-color-24h' href='https://www.24h.com.vn/suc-khoe/an-cua-ghe-chet-co-nguy-co-gi-c62a1806625.html' style={{"color": "#252525", "--hover-color-24h": "#78B43D !important"}}>
                        Ăn cua ghẹ chết có nguy cơ gì?
                      </a>
                    </h3>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='row row-addon-24h'>
          <div className='col-6 col-l'>
            <section className='addon-24h-h mar-t-30'>
              <div className='row'>
                <div className='col-6 no-padd-l'>
                  <section className='gold-24h-r overflow-h' style={{"background": "url('https://icdn.24h.com.vn/images/img_home_listing/bg-box-gia-vang-home.png') center center/cover no-repeat"}}>
                    <header className='gold-24h-r__tit d-flex align-items-center justify-content-between custom-gold' style={{"backgroundColor": "#a61d25"}}>
                      <p>
                        <a className='fw-bold text-uppercase hover-color-24h' href='https://btmc.vn/' rel='nofollow' style={{"color": "#eff18d"}} target='_blank'>
                          Giá vàng
                        </a>
                      </p>
                      <div className='d-flex align-items-center justify-content-end'>
                        <div className='gold-24h__hotline fw-medium'>
                          <a href='https://btmc.vn/' rel='nofollow' style={{"color": "#eff18d"}} target='_blank'>
                            <span className='text-uppercase fw-medium'>
                              Hotline:
                            </span>
                            1800.58.58.99
                          </a>
                        </div>
                      </div>
                    </header>
                    <div className='gold-24h-r__content d-flex align-items-center'>
                      <figure className='gold-24h__partney mar-r-5'>
                        <a href='https://btmc.vn/' rel='nofollow' target='_blank'>
                          <img alt='' className='img-fluid img-scale-down' src='https://icdn.24h.com.vn/upload/3-2026/images/2026-07-14/btmc-body-1783997973-262-width74height68.png' />
                        </a>
                      </figure>
                      <ul className='gold-24h-r__list gold-real flex-1'>
                        <li className='pos-rel'>
                          <a className='d-flex align-items-center' href='https://btmc.vn/' rel='nofollow' target='_blank'>
                            <span className='text-brands text-uppercase'>
                              VRTL
                            </span>
                            <span className='text-buy flex-1'>
                              Mua
                              <strong>
                                136,200
                              </strong>
                              <span className='arrow d-inline-block'></span>
                            </span>
                            <span className='text-buy flex-1'>
                              Bán
                              <strong>
                                140,200
                              </strong>
                              <span className='arrow d-inline-block'></span>
                            </span>
                          </a>
                        </li>
                        <li className='pos-rel'>
                          <a className='d-flex align-items-center' href='https://btmc.vn/' rel='nofollow' target='_blank'>
                            <span className='text-brands text-uppercase'>
                              SJC
                            </span>
                            <span className='text-buy flex-1'>
                              Mua
                              <strong>
                                136,200
                              </strong>
                              <span className='arrow d-inline-block'></span>
                            </span>
                            <span className='text-buy flex-1'>
                              Bán
                              <strong>
                                141,400
                              </strong>
                              <span className='arrow d-inline-block'></span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
                <div className='col-6'>
                  <section className='gold-24h-r rate-24h-r overflow-h' style={{"background": "url('https://icdn.24h.com.vn/images/img_home_listing/bg-box-ty-gia-home.png') center center/cover no-repeat"}}>
                    <header className='gold-24h-r__tit d-flex align-items-center justify-content-between'>
                      <p>
                        <a className='fw-bold color-white text-uppercase hover-color-24h' href='https://www.24h.com.vn/ty-gia-ngoai-te-ttcb-c426.html' style={{"color": "#"}}>
                          Tỷ giá
                        </a>
                      </p>
                    </header>
                    <ul className='gold-24h-r__list'>
                      <li className='pos-rel'>
                        <a className='d-flex align-items-center' href='https://www.24h.com.vn/ty-gia-ngoai-te-ttcb-c426.html'>
                          <span className='text-brands text-uppercase'>
                            USD
                          </span>
                          <span className='text-buy flex-1'>
                            Mua
                            <strong>
                              25,580
                            </strong>
                            <span className='arrow d-inline-block'></span>
                          </span>
                          <span className='text-buy flex-1'>
                            Bán
                            <strong>
                              25,990
                            </strong>
                            <span className='arrow d-inline-block'></span>
                          </span>
                        </a>
                      </li>
                      <li className='pos-rel'>
                        <a className='d-flex align-items-center' href='https://www.24h.com.vn/ty-gia-ngoai-te-ttcb-c426.html'>
                          <span className='text-brands text-uppercase'>
                            EUR
                          </span>
                          <span className='text-buy flex-1'>
                            Mua
                            <strong>
                              28,141
                            </strong>
                            <span className='arrow d-inline-block'></span>
                          </span>
                          <span className='text-buy flex-1'>
                            Bán
                            <strong>
                              29,625
                            </strong>
                            <span className='arrow d-inline-block'></span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </section>
          </div>
          <div className='col-6 col-r'>
            <section className='addon-24h-h mar-t-30'>
              <div className='row'>
                <div className='col-6'>
                  <section className='stock-24h-r overflow-h' style={{"background": "url('https://icdn.24h.com.vn/images/img_home_listing/bg-box-chung-khoan-home.png') center center/cover no-repeat"}}>
                    <header className='stock-24h-r__tit d-flex align-items-center justify-content-between'>
                      <p>
                        <a className='fw-bold text-uppercase hover-color-24h' href='https://www.24h.com.vn/tin-chung-khoan-c566.html'>
                          Chứng Khoán
                        </a>
                      </p>
                    </header>
                    <ul className='stock-24h-r__list'>
                      <li className='pos-rel'>
                        <a className='d-flex align-items-center' href='https://www.24h.com.vn/tin-chung-khoan-c566.html'>
                          <span className='text-code color-main text-uppercase fw-bold flex-1'>
                            VN-INDEX
                          </span>
                          <span className='text-point color-main flex-auto' id='ck_price10'>
                            <span className='d-inline-block arrow arrow-down'></span>
                            1741.62
                          </span>
                          <span className='text-diff color-up flex-1'>
                            <strong className='fw-bold text-uppercase color-down' id='ck_change10'>
                              -13.99
                            </strong>
                            <span id='ck_change_percent10'>
                              (-0.8%)
                            </span>
                          </span>
                        </a>
                      </li>
                      <li className='pos-rel'>
                        <a className='d-flex align-items-center' href='https://www.24h.com.vn/tin-chung-khoan-c566.html'>
                          <span className='text-code color-main text-uppercase fw-bold flex-1'>
                            VN30-INDEX
                          </span>
                          <span className='text-point color-main flex-auto' id='ck_price11'>
                            <span className='d-inline-block arrow arrow-down'></span>
                            1855.04
                          </span>
                          <span className='text-diff color-up flex-1'>
                            <strong className='fw-bold text-uppercase color-down' id='ck_change11'>
                              -22.14
                            </strong>
                            <span id='ck_change_percent11'>
                              (-1.18%)
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className='col-6 no-padd-r'>
                  <section className='vietlott-24h-r overflow-h h-100 pos-rel'>
                    <div className='swiper slide-box-vietlott'>
                      <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                          <div className='vietlott-24h-box mega645'>
                            <div className='box-t d-flex align-items-center pos-rel'>
                              <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                              <figure className='logo-vietlott mar-r-5'>
                                <a href='https://vietlott.vn/' rel='nofollow' target='_blank'>
                                  <img alt='' className='img-fluid' src='https://icdn.24h.com.vn/images/img_home_listing/Vietlott_logo_20250618.svg' />
                                </a>
                              </figure>
                              <p className='text-cate lh-100'>
                                <i className='text-cate fw-bold lh-100'>
                                  Kết quả Max 3D Pro, 3D, Keno, Bingo 18, Lotto 5/35
                                </i>
                              </p>
                            </div>
                            <div className='box-b pos-rel'>
                              <div className='box-items d-flex justify-content-between pos-rel'>
                                <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                                <div className='col-l d-flex align-items-center text-center flex-auto'>
                                  <p className='text-name fw-medium color-main'>
                                    Mega 6/45
                                  </p>
                                </div>
                                <div className='col-r d-flex align-items-center flex-1 padd-l-10 no-padd-r'>
                                  <div className='vietlott-24h-r__items'>
                                    <div className='box-items-t d-flex align-items-center mar-b-5'>
                                      <p className='text-name-num text-right'>
                                        Jackpot
                                      </p>
                                      <span className='fw-medium color-hot'>
                                        20,852,928,000 VNĐ
                                      </span>
                                    </div>
                                    <div className='box-items-b d-flex align-items-center'>
                                      <time className='text-name-num text-time text-right'>
                                        30/10/2026
                                      </time>
                                      <div className='text-prize'>
                                        <span className='fw-medium'>
                                          22
                                        </span>
                                        <span className='fw-medium'>
                                          40
                                        </span>
                                        <span className='fw-medium'>
                                          41
                                        </span>
                                        <span className='fw-medium'>
                                          21
                                        </span>
                                        <span className='fw-medium'>
                                          45
                                        </span>
                                        <span className='fw-medium'>
                                          07
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='vietlott-24h-box power655'>
                            <div className='box-t d-flex align-items-center pos-rel'>
                              <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                              <figure className='logo-vietlott mar-r-5'>
                                <a href='https://vietlott.vn/' rel='nofollow' target='_blank'>
                                  <img alt='' className='img-fluid' src='https://icdn.24h.com.vn/images/img_home_listing/Vietlott_logo_20250618.svg' />
                                </a>
                              </figure>
                              <p className='text-cate lh-100'>
                                <i className='text-cate fw-bold lh-100'>
                                  Kết quả Max 3D Pro, 3D, Keno, Bingo 18, Lotto 5/35
                                </i>
                              </p>
                            </div>
                            <div className='box-b pos-rel'>
                              <div className='box-items d-flex justify-content-between pos-rel'>
                                <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                                <div className='col-l d-flex align-items-center text-center flex-auto'>
                                  <p className='text-name fw-medium color-main'>
                                    Power 6/55
                                  </p>
                                </div>
                                <div className='col-r d-flex align-items-center flex-1 padd-l-10 no-padd-r'>
                                  <div className='vietlott-24h-r__items'>
                                    <div className='box-items-t d-flex align-items-center mar-b-3'>
                                      <p className='text-name-num text-right'>
                                        Jackpot 1
                                      </p>
                                      <span className='fw-medium color-hot color-hot-power655'>
                                        33,944,640,150 VNĐ
                                      </span>
                                    </div>
                                    <div className='box-items-t d-flex align-items-center mar-b-3'>
                                      <p className='text-name-num text-right'>
                                        Jackpot 2
                                      </p>
                                      <span className='fw-medium color-hot color-hot-power655'>
                                        4,675,557,550 VNĐ
                                      </span>
                                    </div>
                                    <div className='box-items-b d-flex align-items-center'>
                                      <time className='text-name-num text-time text-right'>
                                        29/10/2026
                                      </time>
                                      <div className='text-prize'>
                                        <span className='fw-medium'>
                                          38
                                        </span>
                                        <span className='fw-medium'>
                                          46
                                        </span>
                                        <span className='fw-medium'>
                                          09
                                        </span>
                                        <span className='fw-medium'>
                                          33
                                        </span>
                                        <span className='fw-medium'>
                                          29
                                        </span>
                                        <span className='fw-medium'>
                                          45
                                        </span>
                                        <span className='fw-medium last-num'>
                                          53
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='vietlott-24h-box max3d'>
                            <div className='box-t d-flex align-items-center pos-rel'>
                              <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                              <figure className='logo-vietlott mar-r-5'>
                                <a href='https://vietlott.vn/' rel='nofollow' target='_blank'>
                                  <img alt='' className='img-fluid' src='https://icdn.24h.com.vn/images/img_home_listing/Vietlott_logo_20250618.svg' />
                                </a>
                              </figure>
                              <p className='text-cate lh-100'>
                                <i className='text-cate fw-bold lh-100'>
                                  Kết quả Max 3D Pro, 3D, Keno, Bingo 18, Lotto 5/35
                                </i>
                              </p>
                            </div>
                            <div className='box-b pos-rel'>
                              <div className='box-items d-flex justify-content-between pos-rel'>
                                <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                                <div className='col-l d-flex align-items-center text-center flex-auto'>
                                  <p className='text-name fw-medium color-main'>
                                    Max 3D
                                  </p>
                                </div>
                                <div className='col-r d-flex align-items-center flex-1 padd-l-10 no-padd-r'>
                                  <div className='vietlott-24h-r__items'>
                                    <div className='box-items-t d-flex align-items-center mar-b-5'>
                                      <p className='text-name-num text-right'>
                                        Giải đặc biệt
                                      </p>
                                      <span className='fw-medium color-hot'>
                                        1,000,000 VNĐ
                                      </span>
                                    </div>
                                    <div className='box-items-b d-flex align-items-center'>
                                      <time className='text-name-num text-time text-right'>
                                        30/10/2026
                                      </time>
                                      <div className='text-prize'>
                                        <span className='fw-medium'>
                                          980
                                        </span>
                                        <span className='fw-medium'>
                                          708
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='vietlott-24h-box max3dpro'>
                            <div className='box-t d-flex align-items-center pos-rel'>
                              <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                              <figure className='logo-vietlott mar-r-5'>
                                <a href='https://vietlott.vn/' rel='nofollow' target='_blank'>
                                  <img alt='' className='img-fluid' src='https://icdn.24h.com.vn/images/img_home_listing/Vietlott_logo_20250618.svg' />
                                </a>
                              </figure>
                              <p className='text-cate lh-100'>
                                <i className='text-cate fw-bold lh-100'>
                                  Kết quả Max 3D Pro, 3D, Keno, Bingo 18, Lotto 5/35
                                </i>
                              </p>
                            </div>
                            <div className='box-b pos-rel'>
                              <div className='box-items d-flex justify-content-between pos-rel'>
                                <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                                <div className='col-l d-flex align-items-center text-center flex-auto'>
                                  <p className='text-name fw-medium color-main'>
                                    Max 3D Pro
                                  </p>
                                </div>
                                <div className='col-r d-flex align-items-center flex-1 padd-l-10 no-padd-r'>
                                  <div className='vietlott-24h-r__items'>
                                    <div className='box-items-t d-flex align-items-center mar-b-5'>
                                      <p className='text-name-num text-right'>
                                        Giải đặc biệt
                                      </p>
                                      <span className='fw-medium color-hot'>
                                        2,000,000,000 VNĐ
                                      </span>
                                    </div>
                                    <div className='box-items-b d-flex align-items-center'>
                                      <time className='text-name-num text-time text-right'>
                                        29/10/2026
                                      </time>
                                      <div className='text-prize'>
                                        <span className='fw-medium'>
                                          915
                                        </span>
                                        <span className='fw-medium'>
                                          663
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='vietlott-24h-box box-win pos-rel'>
                            <a className='cover-link pos-ab' href='https://vietlott.vn/' rel='nofollow' target='_blank'></a>
                            <img alt='' className='img-fluid w-100 h-100' src='https://icdn.24h.com.vn/upload/3-2026/images/2026-07-23/pc-1784777200-188-width780height225.png' />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='vietlott-24h-btn vietlott-24h-btn-l pos-ab d-flex align-items-center justify-content-center cursor-pointer z-index-1'>
                      <i className='swp-nav arrow-l'></i>
                    </div>
                    <div className='vietlott-24h-btn vietlott-24h-btn-r pos-ab d-flex align-items-center justify-content-center cursor-pointer z-index-1'>
                      <i className='swp-nav arrow-r'></i>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageNewsSections;
