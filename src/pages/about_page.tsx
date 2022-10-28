import React from "react";
import { useNavigate } from "react-router-dom";
export function AboutPage() {
    let navigate = useNavigate(); 
    return (
        <div className="wrapper wrapper__main">
            <header >
                <div className="row container">
                    <h1 >About Page</h1>
                    <div className="spacer"></div>
                    <button className="btn" onClick={() => navigate("/auth")}>
                        
                        Auth
                    </button>
                </div>
            </header>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto molestias modi, ratione repellendus doloremque consequatur dolor culpa alias cumque ipsam blanditiis adipisci unde ducimus, corrupti earum praesentium officia deserunt delectus!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rem ea? Ratione iusto, cumque animi quibusdam id aliquam vero autem minus hic voluptatum esse architecto sint. Tempore hic dolor aliquam, placeat, ut, natus omnis impedit labore consequuntur exercitationem veritatis sint earum molestias perferendis quasi pariatur magni incidunt. Repellendus magnam architecto totam ipsum consectetur doloribus reiciendis? Officiis id iste doloribus, accusamus ratione cupiditate? Similique voluptates, atque ipsum ea debitis totam voluptate velit incidunt ipsam repellendus vitae accusamus omnis officia sit dicta quos nobis beatae unde non provident quasi fuga culpa. Accusamus soluta sed possimus impedit rem quasi dolorem voluptatum tempore at! Odio, ipsam harum ab corrupti perspiciatis tempore aut enim cumque suscipit molestiae laudantium, itaque possimus, voluptate quas praesentium obcaecati eos minima alias non. Nesciunt dolor perferendis, nulla corporis vitae blanditiis accusantium architecto a fugit excepturi, ducimus aliquam voluptates eveniet eaque quidem aut cumque, modi ab perspiciatis consequatur?
            </h2>
        </div>
    )
}
