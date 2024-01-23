import React from "react";
import { FiRrHeart } from "../images/FiRrHeart"
import { FiRrHome } from "../images/FiRrHome";
import { FiRrZoomOut } from "../images/FiRrZoomOut";
import { Profile } from "./Profile";
import "./style.css";

export const MenuClient = () => {
    return (
        <div className="menu-client">
            <div className="overlap">
                <div className="frame">
                    <div className="overlap-group">
                        <img className="buttons" alt="Buttons" src="buttons.png" />
                        <div className="div">
                            <div className="frame-2">
                                <FiRrHome className="icon-instance-node" />
                                <div className="text-wrapper">Accueil</div>
                            </div>
                            <div className="frame-2">
                                <FiRrZoomOut className="icon-instance-node" />
                                <div className="text-wrapper-2">Parcourir</div>
                            </div>
                            <div className="frame-3" />
                            <div className="frame-2">
                                <FiRrHeart className="icon-instance-node" />
                                <div className="text-wrapper-2">Favoris</div>
                            </div>
                            <div className="frame-2">
                                <Profile className="iconly-light-profile" />
                                <div className="text-wrapper-2">Profil</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="qr-code-wrapper">
                    <img className="qr-code" alt="Qr code" src="qr-code.png" />
                </div>
            </div>
        </div>
    );
};
