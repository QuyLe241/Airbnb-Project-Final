import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "./IconFooter/FacebookIcon";
import "./footerstyle.scss";
import IgIcon from "./IconFooter/IgIcon";
import Twitter from "./IconFooter/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container px-1 mx-auto">
        <div className="footer_top space-y-5 py-5">
          <div className="">
            <h3 className="font-semibold" style={{ fontSize: "25px" }}>
              Nguồn cảm hứng cho những kỳ nghỉ sau này
            </h3>
          </div>

          <div className="footer_top_content flex justify-center">
            <div className="">
              <ul className="flex space-x-5 ">
                <li>
                  <Link>Phổ biến</Link>
                </li>
                <li>
                  <Link>Văn hóa và nghệ thuật</Link>
                </li>
                <li>
                  <Link>Ngoài trời</Link>
                </li>
                <li>
                  <Link>Dãy núi</Link>
                </li>
                <li>
                  <Link>Biển </Link>
                </li>
                <li>
                  <Link>Danh mục</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_content flex space-x-3 justify-center py-5 style_border_top">
          <div className="flex space-x-3">
            <div className="">
              <Link>
                <div className="child_content space-y-2">
                  <span>Canmore</span>
                  <p>Chỗ ở cho thuê </p>
                </div>
              </Link>
            </div>
            <div className="">
              <Link>
                <div className="child_content space-y-2">
                  <span>Scottsdale</span>
                  <p>Căn hộ cao cấp cho thuê </p>
                </div>
              </Link>
            </div>
            <div className="">
              <Link>
                <div className="child_content space-y-2">
                  <span>Canmore</span>
                  <p>Chỗ ở cho thuê </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="">
              <Link>
                <div className="child_content space-y-2">
                  <span>Tucson</span>
                  <p>Căn hộ cho thuê</p>
                </div>
              </Link>
            </div>
            <div className="">
              <Link>
                <div className="child_content space-y-2">
                  <span>Canmore</span>
                  <p>Chỗ ở cho thuê </p>
                </div>
              </Link>
            </div>
            <div className="">
              <Link>
                <div className="child_content space-y-2">
                  <span>Monterey</span>
                  <p>Nhà nghỉ thôn dã cho thuê </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer_about_page flex justify-around py-5 style_border_top">
          <div className="content_about">
            <div className="content_decs">
              <span>Hỗ Trợ</span>
            </div>
            <div className="list_content mt-3 ">
              <ul className="space-y-2">
                <li>
                  <Link style={{ color: "" }}>Trung tâm trợ giúp</Link>
                </li>
                <li>
                  <Link>AirCover</Link>
                </li>
                <li>
                  <Link>Chống phân biệt đối xử</Link>
                </li>
                <li>
                  <Link>Hỗ trợ người khuyết tật</Link>
                </li>
                <li>
                  <Link>Các tùy chọn hủy</Link>
                </li>
                <li>
                  <Link>Báo cáo lo ngại của khu dân cư</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content_about">
            <div className="content_decs">
              <span>Đón tiếp khách</span>
            </div>
            <div className="list_content mt-3">
              <ul className="space-y-2">
                <li>
                  <Link>Cho thuê nhà trên Airbnb</Link>
                </li>
                <li>
                  <Link>AirCover cho Chủ nhà</Link>
                </li>
                <li>
                  <Link>Tài nguyên về đón tiếp khách</Link>
                </li>
                <li>
                  <Link>Đón tiếp khách có trách nhiệm</Link>
                </li>
                <li>
                  <Link>Diễn đàn cộng đồng</Link>
                </li>
                <li>
                  <Link>
                    Tham gia khóa học miễn phí về công việc Đón tiếp khách
                  </Link>
                </li>
                <li>
                  <Link></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="content_about">
            <div className="content_decs">
              <span>Airbnb</span>
            </div>
            <div className="list_content mt-3">
              <ul className="space-y-2">
                <li>
                  <Link>Trang tin tức</Link>
                </li>
                <li>
                  <Link>Tính năng mới</Link>
                </li>
                <li>
                  <Link>Cơ hội nghề nghiệp</Link>
                </li>
                <li>
                  <Link>Nhà đầu tư</Link>
                </li>
                <li>
                  <Link>Chỗ ở khẩn cấp Airbnb.org</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_end flex justify-between p-6 style_border_top items-center">
          <div className="footer_left flex space-x-5">
            <div className="">
              <span>© 2024 Airbnb, Inc.</span>
            </div>
            <div className="">
              <Link>Quyền riêng tư</Link>
            </div>
            <div className="">
              <Link>Điểu khoản</Link>
            </div>
            <div className="">
              <Link>Sơ đồ trang web</Link>
            </div>
          </div>
          <div className="footer_right">
            <div className=""></div>
            <div className=""></div>
            <div className="flex space-x-3 social">
              <a href="#">
                <FacebookIcon
                  width={"18px"}
                  height={"18px"}
                  fill={"currentcolor"}
                />
              </a>
              <a href="#">
                <IgIcon width={"18px"} height={"18px"} fill={"currentcolor"} />
              </a>
              <a href="#">
                <Twitter width={"18px"} height={"18px"} fill={"currentcolor"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
