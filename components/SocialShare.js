import { Component } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

class SocialShare extends Component {
  render() {
    const shareUrl = this.props.shareUrl;
    const title = this.props.title;
    const previewImage = this.props.previewImage;
    return (
      <div>
        <FacebookShareButton url={shareUrl} quote={title} className="pl-2">
          <FacebookIcon className="ml-2" size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon className="ml-2" size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} className="pl-2">
          <LinkedinIcon className="ml-2" size={32} round />
        </LinkedinShareButton>
        <PinterestShareButton url={shareUrl} media={`${previewImage.url}`}>
          <PinterestIcon className="ml-2" size={32} round />
        </PinterestShareButton>
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
        >
          <RedditIcon className="ml-2" size={32} round />
        </RedditShareButton>
        <EmailShareButton url={shareUrl} subject={title} body="body">
          <EmailIcon className="ml-2" size={32} round />
        </EmailShareButton>
      </div>
    );
  }
}

export default SocialShare;
