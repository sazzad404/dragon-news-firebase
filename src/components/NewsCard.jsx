import { useState } from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title,id, thumbnail_url, author, rating, total_view, details, tags } =
    news;
  const [showFullText, setShowFullText] = useState(false);

  const formattedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <Link to={`/news-details/${id}`}>
      <div className="card bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200">
        {/* Author Info */}
        <div className="flex items-center bg-base-200 p-4 justify-between">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="text-sm font-semibold">{author.name}</h3>
              <p className="text-xs text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <button className="btn btn-ghost btn-sm">
              <FaRegBookmark size={18} />
            </button>
            <button className="btn btn-ghost btn-sm">
              <FaShareAlt size={18} />
            </button>
          </div>
        </div>

        {/* News Image */}
        <figure className="px-4 pt-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full h-[270px] object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold leading-snug">
            {title}
          </h2>

          {/* Tags */}
          <div className="text-xs text-gray-500 mb-2">
            {tags.map((tag, i) => (
              <span key={i}>
                #{tag}
                {i < tags.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>

          {/* Details with Read More */}
          <p className="text-sm text-gray-600 mt-2">
            {showFullText ? details : `${details.slice(0, 200)}... `}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="text-blue-600 font-medium hover:underline ml-1"
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          </p>

          {/* Rating & Views */}
          <div className="card-actions justify-between items-center mt-4">
            <div className="flex items-center gap-2 text-warning">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < rating.number ? "text-warning" : "text-gray-300"
                  }
                />
              ))}
              <span className="text-sm font-medium text-gray-700">
                {rating.number.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaEye />
              <span className="text-sm">{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
