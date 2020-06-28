import React from 'react';
import './index.scss';
import Card from "@material-ui/core/Card";
import SelectCategory from "../SelectCategory";
import SearchMyPaper from "../SearchMyPaper";
import CreateCategory from "../CreateCategory";


function CategoryPaperBox({onSearchButton}) {

    return (
        <div className="category_paper_box">
            <Card className="category_paper_card">
                <h3 className="category_paper_title">Category Paper</h3>
                <div className="category_items">
                    <SearchMyPaper onSearchButton={onSearchButton}/>
                    <SelectCategory/>
                    <div className="category_item_footer">
                        <CreateCategory/>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CategoryPaperBox;
