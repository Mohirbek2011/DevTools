import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("notifications")) ?? true);
    const [activeTab, setActiveTab] = useState("general");
    const [showNotification, setShowNotification] = useState(false);
    const [notificationText, setNotificationText] = useState("");
    const [language, setLanguage] = useState(localStorage.getItem("language") || "ru");

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("notifications", JSON.stringify(notifications));
    }, [notifications]);

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    }, [language, i18n]);

    const showTempNotification = (message) => {
        if (notifications) {
            setNotificationText(message);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        }
    };

    return (
        <div className="settings">
            <div className="settings__header">
                <button className="back-button" onClick={() => navigate("/")}>
                    &#8592; {t("Settings.back_btn")}
                </button>
                <h1 className="settings__title">{t("Settings.settings_title")}</h1>
            </div>
            <div className="settings__content">
                <div className="settings__tabs">
                    <button className={`settings__tab ${activeTab === "general" ? "active" : ""}`} onClick={() => setActiveTab("general")}>
                        {t("Settings.tab1")}
                    </button>
                    <button className={`settings__tab ${activeTab === "personalization" ? "active" : ""}`} onClick={() => setActiveTab("personalization")}>
                        {t("Settings.tab2")}
                    </button>
                    <button className={`settings__tab ${activeTab === "editor" ? "active" : ""}`} onClick={() => setActiveTab("editor")}>
                        {t("Settings.tab3")}
                    </button>
                    <button className={`settings__tab ${activeTab === "advanced" ? "active" : ""}`} onClick={() => setActiveTab("advanced")}>
                        {t("Settings.tab4")}
                    </button>
                </div>
                <div className="settings__panel">
                    {activeTab === "general" && (
                        <>
                            <div className="settings__row">
                                <label>{t("Settings.Language")}</label>
                                <select className="Settings__select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                                    <option value="ru">Русский</option>
                                    <option value="en">English</option>
                                    <option value="uz">O'zbek</option>
                                    <option value="ja">日本語</option>
                                    <option value="zh">中文</option>
                                    <option value="kk">Қазақ</option>
                                </select>
                            </div>
                            <div className="settings__row">
                                <label>{t("Settings.Notifications")}</label>
                                <input className="Settings__checkbox" type="checkbox" checked={notifications} onChange={() => {
                                    setNotifications(!notifications);
                                    showTempNotification(t("Settings.notifications_updated"));
                                }} />
                            </div>
                        </>
                    )}
                    {activeTab === "personalization" && (
                        <div className="settings__row">
                            <label>{t("Settings.Theme")}</label>
                            <input className="Settings__checkbox" type="checkbox" checked={theme === "dark"} onChange={() => {
                                setTheme(theme === "light" ? "dark" : "light");
                                showTempNotification(t("Settings.theme_updated"));
                            }} />
                        </div>
                    )}
                </div>
            </div>

            {showNotification && <div className="notification">{notificationText}</div>}
        </div>
    );
};

export default Settings;