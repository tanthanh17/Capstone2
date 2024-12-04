import React from 'react';
import { Card, Typography, Button, Row, Col } from 'antd';
import image1 from "../../../assets/landing_page/Image_1.png"
import image2 from "../../../assets/landing_page/image_2.png"
import image3 from "../../../assets/landing_page/image_3.png"
import icon_wrap from "../../../assets/landing_page/icon_wrap.png"
import latest_post from "../../../assets/landing_page/latest_blog.png"

const { Title, Paragraph } = Typography;

const LatestBlogPosts = () => {
  const blogPosts = [
    {
      title: 'How Hypnotherapy Helps You Quit Smoking for Good',
      date: 'August 12, 2024',
      image: image1,
      description: 'Explore how hypnotherapy targets the subconscious to help smokers break the habit, and how a single 90-minute session with Stella can make a lasting difference.'
    },
    {
      title: 'The Virtual Gastric Band: A Non-Surgical Approach to Weight Loss',
      date: 'August 12, 2024', 
      image: image2,
      description: 'Learn how the Virtual Gastric Band technique in hypnotherapy mimics the effects of gastric surgery without invasive procedures, helping clients achieve sustainable weight loss.'
    },
    {
      title: 'Overcoming Anxiety with Hypnotherapy: A Natural Solution',
      date: 'August 12, 2024',
      image: image3,
      description: 'Discover how hypnotherapy can alleviate anxiety by addressing its root causes in the subconscious, leading to a more relaxed, peaceful state of mind.'
    }
  ];

  return (
    <div className="latest-blog-posts" style={{padding: "50px 100px", backgroundColor: "#F8FAFC"}}>
      <div className="header" style={{display: "flex", justifyContent: "space-between"}}>
        <div>
            {/* <Title level={1}>Latest blog posts.</Title> */}
            <img src={latest_post} height={50}/>
            <Paragraph  style={{fontSize: 24, color: "#475467"}}>Our success wants to have a word with you</Paragraph>
        </div>
        <div className="view-all">
        <Button type="primary" style={{borderRadius: 20, fontSize: 16, padding: 20}}>View all Blog posts</Button>
        </div>
      </div>
      <Row gutter={[24, 24]}>
        {blogPosts.map((post, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt={post.title} src={post.image} />}
              style={{
                height: "100%",
                borderRadius: 20
              }}
            >
              <div className="post-content">
                <Paragraph>{post.date}</Paragraph>
                <div style={{display: "flex"}}>
                    <Title level={4}>{post.title}</Title>
                    <div>
                    <img src={icon_wrap} width={24}/>
                    </div>
                </div>
                <Paragraph>
                    {post.description.length > 120 
                    ? post.description.substring(0, 120) + "..." 
                    : post.description}
                </Paragraph>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestBlogPosts;