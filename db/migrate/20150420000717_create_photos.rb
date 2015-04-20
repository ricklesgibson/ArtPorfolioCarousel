class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.references :project, index: true

      t.timestamps null: false
    end
    add_foreign_key :photos, :projects
  end
end
