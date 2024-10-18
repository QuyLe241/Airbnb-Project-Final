import React, { useEffect, useState } from "react";
import { roomService } from "../../services/room.service";
import { useSearchParams } from "react-router-dom";
import StarRateIcon from "./Icon/StarRateIcon";
import DoorIcon from "./Icon/DoorIcon";
import PetIcon from "./Icon/PetIcon";
import CheckIcon from "./Icon/CheckIcon";
import Comments from "../Comment/Comments";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import "./styleContent.scss";

const ContentDetailRoom = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [detailRoom, setDetailRoom] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const idRoom = searchParams.get("id");
    // const resDetail = roomService.detailRoom(idRoom);

    const handleDetailRoom = async () => {
      try {
        const res = await roomService.detailRoom(idRoom);
        console.log(res);
        const newDetailRoom = res.data.content;
        setDetailRoom(newDetailRoom);
      } catch (err) {
        // console.log(err);
      }
    };
    handleDetailRoom();
  }, [searchParams]);

  return (
    <div>
      <div className="">
        <div className="my-3">
          <h3 className="" style={{ fontWeight: 700, fontSize: "30px" }}>
            Thông tin về {detailRoom.tenPhong}
          </h3>
        </div>
        <div className="flex justify-center">
          <img src={detailRoom.hinhAnh} alt="" />
        </div>
        <div className="flex mt-5">
          <div className="content_left w-4/6">
            <div className="">
              <h3 style={{ fontSize: "25px", fontWeight: 600 }}>
                {detailRoom.tenPhong}
              </h3>
              <div className="text-center info_room">
                <span>{detailRoom.khach} Khách</span>
                <span>{detailRoom.phongNgu} Phòng ngủ</span>
                <span>{detailRoom.phongTam} Phòng tắm</span>
                <span>{detailRoom.giuong} Giường</span>
              </div>
            </div>
            <div className="rate flex items-center my-3">
              <div className="">
                <StarRateIcon
                  width={"16px"}
                  height={"16px"}
                  fill={"currentcolor"}
                />
              </div>
              <div className="">
                <span>(4.9)</span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center my-3 ">
                <DoorIcon
                  width={"25px"}
                  height={"25px"}
                  fill={"currentcolor"}
                />
                <div className="ml-5">
                  <span>Tự nhận phòng</span>
                  <p>Bạn có thể gặp nhân viên trực cửa để nhận phòng.</p>
                </div>
              </div>
              <div className="flex items-center my-3 ">
                <PetIcon width={"25px"} height={"25px"} fill={"currentcolor"} />
                <div className="ml-5">
                  <span>Hoan nghênh thú cưng</span>
                  <p>Mang theo thú cưng đến chỗ ở.</p>
                </div>
              </div>
              <div className="">
                <p>
                  Tận hưởng âm thanh của thiên nhiên khi bạn ở tại nơi độc đáo
                  này.
                </p>
              </div>
              <div className="my-3">
                <h3
                  className="py-2"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Nơi này có những gì cho bạn
                </h3>
                <div className="grid grid-cols-2 gap-3 ">
                  <div className="flex things ml-3">
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Bàn là{" "}
                        {detailRoom.banLa ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Bàn ủi{" "}
                        {detailRoom.banUi ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Bếp{" "}
                        {detailRoom.bep ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Điều hòa{" "}
                        {detailRoom.dieuHoa ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Đỗ xe{" "}
                        {detailRoom.doXe ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Hồ bơi{" "}
                        {detailRoom.hoBoi ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Máy giặt{" "}
                        {detailRoom.mayGiat ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Tivi{" "}
                        {detailRoom.tivi ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>
                        Wifi{" "}
                        {detailRoom.wifi ? (
                          <span className="text-green-500">Có</span>
                        ) : (
                          <span className="text-red-500">Không</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>Giường {detailRoom.giuong}</p>
                    </div>
                  </div>
                  <div className="flex ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>Phòng ngủ {detailRoom.phongNgu}</p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>Phòng tắm {detailRoom.phongTam}</p>
                    </div>
                  </div>
                  <div className="flex things ml-3">
                    {" "}
                    <CheckIcon width={"25px"} height={"25px"} />
                    <div className="ml-3">
                      <p>Khách {detailRoom.khach}</p>
                    </div>
                  </div>
                  <div className=""></div>
                </div>
              </div>
              <div className="ngay_tra_phong"></div>
              <div className="rate_and_comment">
                <div className="">
                  <h3></h3>
                </div>
                <div className=""></div>
              </div>
              <div className="visit_for_you"></div>
            </div>
          </div>
          <div className="content_right w-2/6 ">
            <div className="">
              <div className="py-2">
                <h3 style={{ fontSize: "28px", fontWeight: "600" }}>
                  {detailRoom.giaTien} $USD / <span>Đêm</span>
                </h3>
              </div>
              <div className="date py-3 my-1 flex justify-center">
                <div className="">
                  <Space direction="vertical" size={12}>
                    <RangePicker />
                  </Space>
                </div>
              </div>
            </div>
            <div className="btn_get_room flex justify-center my-2">
              <button className="btn_getRoom py-2 w-4/5 rounded-xl">
                Đặt phòng
              </button>
            </div>
            <div
              className="mt-5 py-3 text-center space-y-3"
              style={{ color: "" }}
            >
              <span>Nơi này hiếm khi còn chỗ</span>
              <p>Chỗ ở thường kín phòng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailRoom;
