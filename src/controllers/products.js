import Products from "../models/products.js";

export const getAll = async (req, res) => {
    const { _limit = 10, _sort = "createAt", _order = "asc", _page = 1 } = req.query;
    const options = {
        page: _page,
        limit: _limit,
        sort: {
            [_sort]: _order == "desc" ? -1 : 1,
        },
    };

    try {
        const data = await Products.paginate({}, options);
        if (data.length === 0) {
            return res.json({
                message: "Không có sản phẩm nào",
            });
        }
        return res.status(200).json({
            message: "Lấy tất cả sản phẩm thành công",
            data
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
