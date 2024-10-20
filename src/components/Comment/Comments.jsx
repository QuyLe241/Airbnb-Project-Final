import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./styleComment.scss";
import { commentUser } from "../../services/commentUser.service";
import StarRateIcon from "../ContentDetailRoom/Icon/StarRateIcon";

const Comments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const idComment = searchParams.get("id");
    const handleComment = async () => {
      try {
        const res = await commentUser.comment(idComment);
        console.log(res);
        const newCommets = res.data.content;
        setComment(newCommets);
      } catch (err) {
        console.log(err);
      }
    };
    handleComment();
  }, [searchParams]);
  return (
    <div className="">
      <div className="my-2">
        <h3 className="" style={{ fontSize: "18px", fontWeight: 600 }}>
          {" "}
          Bài viết đánh giá{" "}
        </h3>
      </div>
      <div className="dashboard_rate"></div>
      <div className="grid grid-cols-2 gap-3">
        {comment.map((item, index) => {
          return (
            <div
              className="py-3"
              style={{ borderBottom: "1px rgb(235, 233, 233) solid" }}
              key={index}
            >
              <div className=" flex items-center">
                <div className="">
                  <img
                    src={item.avatar}
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                </div>
                <div className="">
                  <span style={{ fontWeight: 600 }}>
                    {item.tenNguoiBinhLuan}
                  </span>
                  <p>{item.ngayBinhLuan}</p>
                </div>
              </div>
              <div className="rate_star flex items-center space-x-2 py-1">
                <div className="">
                  <span style={{ fontWeight: 600 }}>{item.saoBinhLuan}</span>
                </div>
                <StarRateIcon width={"20px"} height={"20px"} />
              </div>
              <div className="time_rate"></div>
              <div className="">
                <p className="" style={{ color: "rgb(34, 34, 34)" }}>
                  {item.noiDung}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
