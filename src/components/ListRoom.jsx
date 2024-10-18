import React, { useEffect, useState } from "react";
import { roomService } from "../services/room.service";
import { Link } from "react-router-dom";
import { pathDefault } from "../common/path";

const ListRoom = () => {
  const [listRoom, setListRoom] = useState([]);

  useEffect(() => {
    const handleListRoom = async () => {
      try {
        const res = await roomService.listRoom();
        // console.log(res);
        const newListRoom = res.data.content;
        setListRoom(newListRoom);
      } catch (err) {
        // console.log(err);
      }
    };
    handleListRoom();
  }, []);

  return (
    <div className="list_room">
      <div className="grid grid-cols-4 gap-3">
        {listRoom.map((item, index) => {
          return (
            <div className="" key={index}>
              <Link to={`${pathDefault.detail}?id=${item.id}`}>
                <div className="">
                  <img
                    src={item.hinhAnh}
                    className="rounded-xl"
                    style={{ height: "", width: "100%" }}
                    alt=""
                  />
                </div>
                <div className="">
                  <span style={{ fontWeight: 600 }}>{item.tenPhong}</span>
                </div>
                <div className="">
                  <p>
                    Khách <span>{item.khach}</span>
                  </p>
                </div>
                <div className="">
                  <p>
                    Hồ bơi <span>{item.hoBoi ? "Có" : "Không có"}</span>
                  </p>
                </div>
                <div className="">
                  <p>
                    Phòng ngủ <span>{item.phongNgu}</span>
                  </p>
                </div>
                <div className="">
                  <span></span>
                  <p style={{ fontWeight: 600 }}>
                    Giá tiền{" "}
                    <span>
                      {item.giaTien.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </span>{" "}
                    / đêm
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListRoom;
