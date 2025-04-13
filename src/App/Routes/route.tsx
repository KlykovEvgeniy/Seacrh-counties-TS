import { Route, Routes } from "react-router-dom";
import { MainPage, CountryPage } from "../../pages";

export const Router = function () {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/:id" element={<CountryPage />} />
        </Routes>
    )
}