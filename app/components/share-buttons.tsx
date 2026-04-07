import React from "react";

type ShareLinks = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  whatsapp?: string;
  reddit?: string;
};

type Props = {
  shareLinks: ShareLinks;
};

const ShareButtons: React.FC<Props> = ({ shareLinks }) => {
  return (
    <div className="d-flex flex-wrap gap-2 mt-3">
      
      {shareLinks.facebook && (
        <a href={shareLinks.facebook} target="_blank" rel="noreferrer" className="btn btn-primary">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
      )}

      {shareLinks.twitter && (
        <a href={shareLinks.twitter} target="_blank" rel="noreferrer" className="btn btn-info text-white">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      )}

      {shareLinks.linkedin && (
        <a href={shareLinks.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
      )}

      {shareLinks.whatsapp && (
        <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer" className="btn btn-success">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      )}

      {shareLinks.reddit && (
        <a href={shareLinks.reddit} target="_blank" rel="noreferrer" className="btn btn-danger">
          <i className="fab fa-reddit"></i> Reddit
        </a>
      )}
      
    </div>
  );
};

export default ShareButtons;