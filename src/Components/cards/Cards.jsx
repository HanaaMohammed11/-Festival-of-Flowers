import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import slide_img from './../../assets/plant3.jpg';

function Cards() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
        <Card className="max-w-xs " imgSrc={slide_img} >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card>
        <Card className="max-w-xs " imgSrc="public/images.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card>
        <Card className="max-w-xs " imgSrc="public/images.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card>
        <Card className="max-w-xs" imgSrc="public/images.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card>
        <Card className="max-w-xs " imgSrc="public/images.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card>
        <Card className="max-w-xs " imgSrc="public/pNug7bBksRVsL54EEE5Wu9.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card>
        <Card className="max-w-xs " imgSrc="public/pNug7bBksRVsL54EEE5Wu9.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card> 
         <Card className="max-w-xs " imgSrc="public/pNug7bBksRVsL54EEE5Wu9.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <button className="text-lime-950 font-semibold">  <Link to="/detiles">Show More...</Link></button>
        </Card>
      </div>
    </>
  );
}

export default Cards;
