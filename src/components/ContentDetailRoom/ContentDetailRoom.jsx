import React, { useEffect, useState } from "react";
import { roomService } from "../../services/room.service";
import { useSearchParams } from "react-router-dom";
import StarRateIcon from "./Icon/StarRateIcon";
import DoorIcon from "./Icon/DoorIcon";
import PetIcon from "./Icon/PetIcon";
import CheckIcon from "./Icon/CheckIcon";
import Comments from "../Comment/Comments";

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
        // console.log(res);
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
        <div className="">
          <h3>Thông tin về {detailRoom.tenPhong}</h3>
        </div>
        <div className="flex justify-center">
          <img src={detailRoom.hinhAnh} alt="" />
        </div>
        <div className="">
          <div className="content_left w-4/6">
            <div className="">
              <h3>{detailRoom.tenPhong}</h3>
              <div className="">
                <span>{detailRoom.khach} Khách</span>
                <span>{detailRoom.phongNgu} Phòng ngủ</span>
                <span>{detailRoom.phongTam} Phòng tắm</span>
                <span>{detailRoom.giuong} Giường</span>
              </div>
            </div>
            <div className="rate flex items-center">
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
              <div className="flex items-center">
                <DoorIcon
                  width={"25px"}
                  height={"25px"}
                  fill={"currentcolor"}
                />
                <div className="">
                  <span>Tự nhận phòng</span>
                  <p>Bạn có thể gặp nhân viên trực cửa để nhận phòng.</p>
                </div>
              </div>
              <div className="flex items-center">
                <PetIcon width={"25px"} height={"25px"} fill={"currentcolor"} />
                <div className="">
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
              <div className="">
                <h3>Nơi này có những gì cho bạn</h3>
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
          <div className="content_right w-2/6"></div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailRoom;
