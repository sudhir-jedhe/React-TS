import React, {
  Fragment,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./tabs.css";
import Tab from "../tab/tab";
import VideoPlayer from "../videoPlayer/videoPlayer";

const CustomDialog = forwardRef(({ handleModalClose, modalContent }, ref) => {
  return (
    <dialog
      ref={ref}
      onCancel={handleModalClose}
      className="dialogRoot"
      title="Press Esc to exit zoom mode"
    >
      {Object.keys(modalContent).length ? (
        <VideoPlayer
          key={modalContent.slug}
          enableControls={false}
          keyField="original"
          {...modalContent}
        />
      ) : null}
    </dialog>
  );
});

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [safeSearch, setSafeSearch] = useState(true);
  const [modalContent, setModalContent] = useState({});
  const dialogRef = useRef();

  useEffect(() => {
    if (Object.keys(modalContent).length) {
      dialogRef.current?.showModal();
      document.body.classList.add("modal-open");
    } else {
      dialogRef.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [modalContent]);

  const handleTabChange = (newTab) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
    }
  };

  const activeTabObject = useMemo(
    () => tabs.find((tab) => tab.id === activeTab),
    [activeTab, tabs]
  );

  const handleModalOpen = (content) => {
    setModalContent({ ...content });
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setModalContent({});
  };

  return (
    <Fragment>
      <div
        className="safeSearchRoot"
        onClick={() => setSafeSearch((safeSearch) => !safeSearch)}
      >
        <div className="safeSearchLabel">Safe Search</div>
        <div
          className={`safeSearchIndicatorRoot ${
            safeSearch ? "safeSearchStatusOn" : "safeSearchStatusOff"
          }`}
        >
          <div>{safeSearch ? "On" : "Off"}</div>
        </div>
      </div>
      <div className="tabsRoot">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
              {...tab}
              isActive={activeTab === tab.id}
              handleTabChange={handleTabChange}
            />
          );
        })}
      </div>
      {activeTabObject.child({
        ...activeTabObject.childProps,
        safeSearch,
        zoomContent: handleModalOpen,
      })}
      <CustomDialog
        ref={dialogRef}
        handleModalClose={handleModalClose}
        modalContent={modalContent}
      />
    </Fragment>
  );
};

export default Tabs;
