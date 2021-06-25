<?php

class ContactsImporter
{
    private $filename;
    private $columns;
    private $fp;
    private $result = [];
    private $error = null;

    /**
     * ContactsImporter constructor.
     * @param $filename
     * @param $columns
     */
    public function __construct($filename, $columns)
    {
        $this->filename = $filename;
        $this->columns = $columns;
    }

    public function import()
    {
        if (!$this->validateColumns($this->columns)) {
            $this->error = "Заданы неверные заголовки столбцов";
        }

        if (file_exists($this->filename)) {
            $this->fp = fopen($this->filename, 'r');

            if ($this->fp) {
                $header_data = $this->getHeaderData();

                if ($header_data == $this->columns) {
                    while ($line = $this->getNextLine()) {
                        $this->result[] = $line;
                    }
                } else {
                    $this->error = "Исходный файл не содержит необходимых столбцов";
                }

            } else {
                $this->error = "Не удалось открыть файл на чтение";
            }

        } else {
            $this->error = "Файл не существует";
        }
    }

    public function getData()
    {
        return $this->result;
    }

    private function getHeaderData()
    {
        rewind($this->fp);
        $data = fgetcsv($this->fp);
        
        return $data;
    }

    private function getNextLine()
    {
        $result = false;
        if (!feof($this->fp)) {
            $result = fgetcsv($this->fp);
        }

        return $result;
    }

    private function validateColumns($columns)
    {
        $result = true;
        if (count($columns)) {
            foreach ($columns as $column) {
                if (!is_string($column)) {
                    $result = false;
                }
            }
        } else {
            $result = false;
        }

        return $result;
    }
}
