const Favorite = require("../models/Favorite");

class FavoriteServices {
  //ver favoritos
  static async getAll(params) {
    try {
      const data = await Favorite.find(params).exec();
      return {
        error: false,
        data: data,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error 404: page not found",
      };
    }
  }

  //añadir animal a favoritos
  static async addOne(body) {
    try {
      await Favorite.create(body);
      return {
        error: false,
        data: body,
      };
    } catch (error) {
      return {
        error: true,
        data: error,
      };
    }
  }

  //eliminar favorito
  static async deleteOne(id) {
    try {
      const result = await Favorite.findByIdAndDelete(id);
      return {
        error: false,
        data: "Animal deleted successfully",
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
        data: "error: couldn't delete Animal, it doesn't exist.",
      };
    }
  }
}

module.exports = FavoriteServices;