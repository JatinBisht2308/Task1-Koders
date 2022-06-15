import React, { Suspense, lazy } from "react";
import "./ServiceDescSetter.css";
import { useParams } from "react-router";
import ServiceDesc from "../../components/ServiceDesc/ServiceDesc";
import { arr }  from '../../helperForServiceDesc';
import "animate.css";
import AOS from "aos";
const Navbar = lazy(() => import("../Navbar/Navbar"));
const Footer = lazy(() => import("../Footer/Footer"));

const ServiceDescSetter = (props) => {
  AOS.init({
    duration: 1000,
  });
  let { id } = useParams();
  return <div className="ServiceDescSetter">
    {props.title} hello
     <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      {/* ServiceDesc */}
      <ServiceDesc items={arr[id].items} title={id} desc={arr[id].desc} price="10999" />
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
  </div>;
};

export default ServiceDescSetter;
