import React from 'react';
import { Route , Routes } from 'react-router-dom'; 
import Dashboard from "../components/dashboard/dashboard";
import Vehicle from './add/vehicle';
import Camera from './add/camera';
import ActivityLog from './log/log';
import CameraData from './data/camera';
import VehicleData from './data/vehicle';
import VehicleInDetail from './data/vehicle-data';
const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/add-vehicle" element={<Vehicle />} />
            <Route path="/add-camera" element={<Camera />} />
            <Route path="camera" element={<CameraData />} />
            <Route path="/log" element={<ActivityLog />} />
            <Route path="/vehicle" element={<VehicleData />} />
            <Route path="/vehicle-indetail/:id" element={<VehicleInDetail />} />
        </Routes>
    )
}
export default routes; 